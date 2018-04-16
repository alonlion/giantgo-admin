import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('./views/Index.vue')
const signIn = () => import('./views/Passport/SignIn.vue')
const signUp = () => import('./views/Passport/SignUp.vue')

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
  if (to.matched.some(record => record.meta.authorization)) {
    if (Vue.cookie.get('token')) {
      next()
    } else {
      next({
        path: '/passport/signin',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
