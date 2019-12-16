const deliverGoodsScreen = () => import('@/views/workPlatformViews/deliverGoods/deliverGoodsScreen')
const followOrderScreen = () => import('@/views/workPlatformViews/followOrder/followOrderScreen')
const moreServerScreen = () => import('@/views/workPlatformViews/moreServer/moreServerScreen')
const myAccountScreen = () => import('@/views/workPlatformViews/myAccount/myAccountScreen')
const platformLoginScreen = () => import('@/views/workPlatformViews/platformLogin/platformLoginScreen')
const saveStorageScreen = () => import('@/views/workPlatformViews/saveStorage/saveStorageScreen')



export default [
  {
    path: '/deliverGoods',
    redirect: '/deliverGoods/lessTruck',
    name: '发货',
    component: deliverGoodsScreen,
    children: [
      {
        path: '/deliverGoods/lessTruck',
        name: '零担',
        component: () => import('@/views/workPlatformViews/deliverGoods/lessTruck/lessTruckScreen'),
      }, {
        path: '/deliverGoods/sameCity',
        name: '同城',
        component: () => import('@/views/workPlatformViews/deliverGoods/sameCity/sameCityScreen'),
      }, {
        path: '/deliverGoods/fullTruck',
        name: '整车',
        component: () => import('@/views/workPlatformViews/deliverGoods/fullTruck/fullTruckScreen'),
      }, {
        path: '/deliverGoods/deliverStorage',
        name: '仓储',
        component: () => import('@/views/workPlatformViews/deliverGoods/deliverStorage/deliverStorageScreen'),
      }
    ]
  }, {
    path: '/followOrder',
    name: '跟单',
    redirect: '/followOrder/myOrder',
    component: followOrderScreen,
    children: [
      {
        path: '/followOrder/myOrder',
        name: '我的订单',
        component: () => import('@/views/workPlatformViews/followOrder/myOrder'),
      }, {
        path: '/followOrder/myNotes',
        name: '我的发票',
        component: () => import('@/views/workPlatformViews/followOrder/myNotes/myNotesScreen'),
      }, {
        path: '/followOrder/myIntegral',
        name: '我的积分',
        component: () => import('@/views/workPlatformViews/followOrder/myIntegral'),
      }, {
        path: '/followOrder/myDiscount',
        name: '我的优惠券',
        component: () => import('@/views/workPlatformViews/followOrder/myDiscount'),
      }, {
        path: '/followOrder/myClaim',
        name: '我的理赔',
        component: () => import('@/views/workPlatformViews/followOrder/myClaim/myClaimScreen'),
      }
    ]
  }, {
    path: '/moreServer',
    name: '更多服务',
    redirect: '/moreServer/pruductStore',
    component: moreServerScreen,
    children: [
      {
        path: '/moreServer/pruductStore',
        name: '产品库',
        component: () => import('@/views/workPlatformViews/moreServer/pruductStore'),
      }, {
        path: '/moreServer/addressBook',
        name: '地址簿',
        component: () => import('@/views/workPlatformViews/moreServer/addressBook'),
      }, {
        path: '/moreServer/billStatement',
        name: '台账报表',
        component: () => import('@/views/workPlatformViews/moreServer/billStatement/billStatementScreen'),
      }
    ]
  }, {
    path: '/myAccount',
    name: '我的账单',
    redirect: '/myAccount/billInstruction',
    component: myAccountScreen,
    children: [
      {
        path: '/myAccount/billInstruction',
        name: '开票说明',
        component: () => import('@/views/workPlatformViews/myAccount/billInstruction'),
      }, {
        path: '/myAccount/constractPlan',
        name: '合同方案',
        component: () => import('@/views/workPlatformViews/myAccount/constractPlan'),
      }, {
        path: '/myAccount/merchantSetting',
        name: '商户设置',
        component: () => import('@/views/workPlatformViews/myAccount/merchantSetting'),
      }, {
        path: '/myAccount/securitySetting',
        name: '安全设置',
        component: () => import('@/views/workPlatformViews/myAccount/securitySetting'),
      }, {
        path: '/myAccount/staffSetting',
        name: '员工设置',
        component: () => import('@/views/workPlatformViews/myAccount/staffSetting'),
      }, {
        path: '/myAccount/userGuide',
        name: '用户指南',
        component: () => import('@/views/workPlatformViews/myAccount/userGuide'),
      },
    ]
  }, {
    path: '/platformLogin',
    name: '登录',
    component: platformLoginScreen,
  }, {
    path: '/saveStorage',
    name: '仓储',
    redirect: '/saveStorage/homeStorage',
    component: saveStorageScreen,
    children: [
      {
        path: '/saveStorage/homeStorage',
        name: '首页',
        component: () => import('@/views/workPlatformViews/saveStorage/homeStorage'),
      },{
        path: '/saveStorage/intoStorage',
        name: '入库',
        component: () => import('@/views/workPlatformViews/saveStorage/intoStorage'),
      },{
        path: '/saveStorage/displayStorage',
        name: '库存',
        component: () => import('@/views/workPlatformViews/saveStorage/displayStorage'),
      }, {
        path: '/saveStorage/showDetail',
        name: '明细',
        component: () => import('@/views/workPlatformViews/saveStorage/showDetail'),
      },
    ]
  },
]