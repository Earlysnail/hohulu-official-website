import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import officialRoutes from './routes/official/index'
import workPlatformRoutes from './routes/workPlatform/index'

const HomeScreen = () => import('../views/officialViews/home/homeScreen')

var constantRoutes = [
  {
    path: '/',
    component: HomeScreen,
  }
]

const mergeRoutes = allRoutesArray => {
  allRoutesArray.forEach(routes => {
    routes.forEach(route => { constantRoutes.push(route); })
  })
  return constantRoutes;
}


const router = new VueRouter({
  mode: 'history',
  routes: mergeRoutes([officialRoutes, workPlatformRoutes])
})
router.beforeEach((to, from, next) => {
  if(to.path !== from.path){
    next()
  }
})

export {
  router
}