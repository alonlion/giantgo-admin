import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress/nprogress'
import store from './store'
import { getToken } from '@/utils/token'

const passport = () => import(/* webpackChunkName: "passports" */ './views/Passport.vue')
const signIn = () => import(/* webpackChunkName: "passports" */ './views/Passport/SignIn.vue')
const signUp = () => import(/* webpackChunkName: "passports" */ './views/Passport/SignUp.vue')
const main = () => import(/* webpackChunkName: "home" */ './views/Main.vue')
const dashboard = () => import(/* webpackChunkName: "home" */ './views/Home/Dashboard.vue')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/passports',
      name: 'passports',
      component: passport,
      meta: {authorization: false},
      children: [
        {
          path: 'signin',
          name: 'signIn',
          component: signIn
        },
        {
          path: 'signup',
          name: 'signUp',
          component: signUp
        }
      ]
    }, {
      path: '/',
      name: 'main',
      redirect: 'dashboard',
      component: main,
      meta: {authorization: true},
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: dashboard
        }
      ]
    }, {
      path: '*',
      component: dashboard
    }
  ]
})

router.beforeEach(function (to, from, next) {
  const requireAuth = to.matched.some(record => record.meta.authorization)

  if (!requireAuth) {
    return next()
  }

  if (getToken()) {
    return store.dispatch('getMyInfo').then(() => {
      next()
    }).catch(() => {
      store.dispatch('logout')
      redirectToLogin()
    })
  }

  redirectToLogin()

  function redirectToLogin () {
    next({
      name: 'signIn',
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
