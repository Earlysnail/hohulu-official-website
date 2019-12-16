import NotFouder from './NotFouder'
import HohuluHeader from './HohuluHeader'
import HohuluFooter from './HohuluFooter'
import HohuluWorkHeader from './HohuluWorkHeader'
import HohuluSideTabs from './HohuluSideTabs'

export default {
  install: (Vue) => {
    Vue.component('NotFouder', NotFouder)
    Vue.component('HohuluHeader', HohuluHeader)
    Vue.component('HohuluFooter', HohuluFooter)
    Vue.component('HohuluWorkHeader', HohuluWorkHeader)
    Vue.component('HohuluSideTabs', HohuluSideTabs)
  }
}