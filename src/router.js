import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeScreen from './views/home/homeScreen'
import LoginScreen from './views/login/loginScreen'
import TheSameCityScreen from './views/theSameCity/theSameCityScreen'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: HomeScreen,
  }, {
    path: '/home',
    component: HomeScreen,
  }, {
    path: '/login',
    component: LoginScreen
  }, {
    path: '/theSameCity',
    component: TheSameCityScreen
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

export {
  router
}