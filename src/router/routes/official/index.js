const HomeScreen = () => import('@/views/officialViews/home/homeScreen')
const LessTruckScreen = () => import('@/views/officialViews/lessTruck/lessTruckScreen')
const userScreen = () => import('@/views/officialViews/user/userScreen')
const SameCityScreen = () => import('@/views/officialViews/sameCity/sameCityScreen')
const FullTruckScreen = () => import('@/views/officialViews/fullTruck/fullTruckScreen')
const driverJoinScreen = () => import('@/views/officialViews/driverJoin/driverJoinScreen')
const mainlineJoinScreen = () => import('@/views/officialViews/mainlineJoin/mainlineJoinScreen')
const workChanceScreen = () => import('@/views/officialViews/workChance/workChanceScreen')
const Component = () => import('@/components/component')




export default [
  {
    path: '/home',
    name: '首页',
    component: HomeScreen,
  }, {
    path: '/lessTruck',
    name: '零担',
    component: LessTruckScreen
  }, {
    path: '/sameCity',
    name: '同城',
    component: SameCityScreen
  }, {
    path: '/fullTruck',
    name: '整车',
    component: FullTruckScreen
  }, {
    path: '/driverJoin',
    name: '司机加盟',
    component: driverJoinScreen
  }, {
    path: '/mainlineJoin',
    name: '专线加盟',
    component: mainlineJoinScreen
  }, {
    path: '/workChance',
    name: '工作机会',
    component: workChanceScreen
  }, {
    path: '/user',
    name: '用户',
    component: userScreen
  }, {
    path: '/component',
    name: '组件',
    component: Component
  }
]