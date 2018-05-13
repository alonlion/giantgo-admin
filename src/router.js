import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress/nprogress'
import store from './store'

const index = () => import(/* webpackChunkName: "index" */ './views/Index.vue')
const signIn = () => import(/* webpackChunkName: "passport" */ './views/Passport/SignIn.vue')
const saleIndex = () => import(/* webpackChunkName: "sales" */ './views/Sales/Index.vue')
const userIndex = () => import(/* webpackChunkName: "users" */ './views/Users/Index.vue')
const managerIndex = () => import(/* webpackChunkName: "managers" */ './views/Managers/Index.vue')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/sales',
          name: 'saleIndex',
          component: saleIndex
        }, {
          path: '/managers',
          name: 'managerIndex',
          component: managerIndex
        }, {
          path: '/users',
          name: 'userIndex',
          component: userIndex
        }
      ],
      meta: {authorization: true}
    }, {
      path: '/passport/signin',
      name: 'signin',
      component: signIn
    }, {
      path: '*',
      component: index
    }
  ]
})

router.beforeEach(function (to, from, next) {
  const requireAuth = to.matched.some(record => record.meta.authorization)

  if (!requireAuth) {
    return next()
  }

  if (Vue.cookie.get('token')) {
    return store.dispatch('getMyInfo').then(() => {
      next()
    }).catch(() => {
      store.dispatch('clearUserInfo')
      redirectToLogin()
    })
  }

  redirectToLogin()

  function redirectToLogin () {
    next({
      name: 'signin',
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
