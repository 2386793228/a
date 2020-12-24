import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
const Home = () => import('../views/home/Home')
// 登录
const pwdLogin = () => import('../views/login/pwdLogin')
const gestureUnlock = () => import('../views/login/gestureUnlock')
const fingerPrint = () => import('../views/login/fingerPrint')
// 首页下面的公告栏
const homeLande = () => import('../views/home/msgboard/homeLande')
const firstHome = () => import('../views/home/msgboard/firstHome')
const secondHome = () => import('../views/home/msgboard/secondHome')
const secsLoans = () => import('../views/home/msgboard/secsLoans')
// 公告详情
const particularsBoard = () => import('../views/home/msgboard/particularsBoard/particularsBoard')

// 个人中心-我的设置
const mySettings = () => import('../views/home/person/mysettins/mySettings')
const changePwd = () => import('../views/home/person/mysettins/changePwd')
// 1.安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/pwdLogin'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '主页'
    },
  },
  {
    path: '/pwdLogin',
    component: pwdLogin,
    meta: {
      title: '密码登录'
    },
  },
  {
    path: '/gestureUnlock',
    component: gestureUnlock,
    meta: {
      title: '手势解锁'
    },
  },
  {
    path: '/fingerPrint',
    component: fingerPrint,
    meta: {
      title: '指纹解锁'
    },
  },
  // home/homeLande
  {
    path:'/homeLande',
    redirect:'/home/homeLande'
  },
  {
    path: '/home/homeLande',
    component: homeLande,
    meta: {
      title: '家园e贷'
    },
  },
  // home/firstHome
  {
    path:'/firstHome',
    redirect:'/home/firstHome'
  },
  {
    path: '/home/firstHome',
    component: firstHome,
    meta: {
      title: '一手房按揭'
    },
  },
  // home/secondHome
  {
    path:'/secondHome',
    redirect:'/home/secondHome'
  },
  {
    path: '/home/secondHome',
    component: secondHome,
    meta: {
      title: '二手房按揭'
    },
  },
  // home/secsLoans
  {
    path:'/secsLoans',
    redirect:'/home/secsLoans'
  },
  {
    path: '/home/secsLoans',
    component: secsLoans,
    meta: {
      title: '秒秒贷'
    },
  },
  // home/homeLande/particularsBoard
  {
    path:'/particularsBoard',
    redirect:'/home/homeLande/particularsBoard'
  },
  {
    path: '/home/homeLande/particularsBoard',
    component: particularsBoard,
    meta: {
      title: '公告详情'
    },
  },
  // home/person/mySettings/mySettings
  {
    path:'/mySettings',
    redirect:'/home/person/mySettings/mySettings'
  },
  {
    path: '/home/person/mySettings/mySettings',
    component: mySettings,
    meta: {
      title: '设置中心'
    },
  },
  // home/person/mySettings/changePwd
  {
    path:'/changePwd',
    redirect:'/home/person/mySettings/changePwd'
  },
  {
    path: '/home/person/mySettings/changePwd',
    component: changePwd,
    meta: {
      title: '修改密码'
    },
  }

]

// 解决了 this.$router.push('/about')  重复点击两次报错的问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 2.创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置守卫(guard)
router.beforeEach((to,from,next)=>{
  // 从from跳转到to
  document.title=to.matched[0].meta.title
  // console.log(to);
  next()

})

// 3.导出
export default router