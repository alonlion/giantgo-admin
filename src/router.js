import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress/nprogress'
import store from './store'

const home = () => import(/* webpackChunkName: "index" */ './views/Index.vue')
const signIn = () => import(/* webpackChunkName: "passport" */ './views/Passport/SignIn.vue')
const signUp = () => import(/* webpackChunkName: "passport" */ './views/Passport/SignUp.vue')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {authorization: true}
    }, {
      path: '/passport/signup',
      name: 'signup',
      component: signUp
    }, {
      path: '/passport/signin',
      name: 'signin',
      component: signIn
    }, {
      path: '*',
      component: home
    }
  ]
})

router.beforeEach(function (to, from, next) {
  const requireAuth = to.matched.some(record => record.meta.authorization)

  if (!requireAuth) {
    next()
  }

  if (Vue.cookie.get('token')) {
    return store.dispatch('getMyInfo').then(validUser => {
      // Then continue if the token still represents a valid user,
      // otherwise redirect to login.
      validUser ? next() : redirectToLogin()
    })
  }

  function redirectToLogin () {
    next({
      path: '/passport/signin',
      query: {redirect: to.fullPath}
    })
  }
})

// After navigation is confirmed, but before resolving...
router.beforeResolve((routeTo, routeFrom, next) => {
  // If this isn't an initial page load...
  if (routeFrom.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
