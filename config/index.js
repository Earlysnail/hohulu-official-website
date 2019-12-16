//红葫芦官网菜单
const OFFICILA_MENU = [
  {
    path: '/home',
    name: '首页'
  }, {
    path: '/lessTruck',
    name: '零担'
  }, {
    path: '/sameCity',
    name: '同城'
  }, {
    path: '/fullTruck',
    name: '整车'
  }, {
    path: '/driverJoin',
    name: '司机加盟'
  }, {
    path: '/mainlineJoin',
    name: '专线加盟'
  }, {
    path: '/workChance',
    name: '工作机会'
  }, {
    path: '/user',
    name: '用户'
  }, {
    path: '/component',
    name: '组件'
  },{
    path: '/deliverGoods',
    name: '工作台',
  }
]
//红葫芦工作台菜单
const WORK_PLATFORM_MENU = [
  {
    path: '/deliverGoods',
    name: '发货',
    children: [
      {
        path: '/deliverGoods/lessTruck',
        name: '零担',
      }, {
        path: '/deliverGoods/sameCity',
        name: '同城',
      }, {
        path: '/deliverGoods/fullTruck',
        name: '整车',
      }, {
        path: '/deliverGoods/deliverStorage',
        name: '仓配',
      }
    ]
  }, {
    path: '/followOrder',
    name: '跟单',
    children: [
      {
        path: '/followOrder/myOrder',
        name: '我的订单',
      }, {
        path: '/followOrder/myNotes',
        name: '我的发票',
      }, {
        path: '/followOrder/myIntegral',
        name: '我的积分',
      }, {
        path: '/followOrder/myDiscount',
        name: '我的优惠信息',
      }, {
        path: '/followOrder/myClaim',
        name: '我的理赔',
      }
    ]
  }, {
    path: '/moreServer',
    name: '更多服务',
    children: [
      {
        path: '/moreServer/pruductStore',
        name: '产品库',
      }, {
        path: '/moreServer/addressBook',
        name: '地址簿',
      }, {
        path: '/moreServer/billStatement',
        name: '台账报表',
      }
    ]
  }, {
    path: '/saveStorage',
    name: '仓储',
    children: [
      {
        path: '/saveStorage/homeStorage',
        name: '首页',
      }, {
        path: '/saveStorage/intoStorage',
        name: '入库',
      }, {
        path: '/saveStorage/displayStorage',
        name: '库存',
      }, {
        path: '/saveStorage/showDetail',
        name: '明细',
      },
    ]
  },{
    path: '/home',
    name: '首页(切换到官网)'
  }
]
export {
  OFFICILA_MENU,
  WORK_PLATFORM_MENU
}


