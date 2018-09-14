import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import ls from '../utils/localStorage'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name == 'Login') {
    ls.removeItem('user');
  }

  let user = ls.getItem('user');
  if (!user && to.name != 'Login') {
    next({ path: '/auth/login' })
  }else {
    next()
  }
})

export default router
