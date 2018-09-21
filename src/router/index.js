import Vue from 'vue'
import Router from 'vue-router'
import Biji from '@/pages/Biji'
import Life from '@/pages/Life'
import Web from '@/pages/Web'
import Ui from '@/pages/Ui'
import Cg from '@/pages/Cg'
import Offlce from '@/pages/Offlce'
import Mechanical from '@/pages/Mechanical'
import NavCard from '@/pages/NavCard'

// const Biji = () => import('@/pages/Biji')
// const Life = () => import('@/pages/Life')
// const Web = () => import('@/pages/Web')
// const Ui = () => import('@/pages/Ui')
// const Cg = () => import('@/pages/Cg')
// const Offlce = () => import('@/pages/Offlce')
// const Mechanical = () => import('@/pages/Mechanical')
// const NavCard = () => import('@/pages/NavCard')

// Web  前端开发
// Ui   界面设计
// Cg   影视后期
// Offlce 日常办公
// Mechanical 工程机械
// NavCard 导航卡片
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Biji
    }, {
      path: '/biji',
      component: Biji
    }, {
      path: '/life',
      component: Life
    },
    {
      path: '/web',
      component: Web
    }, {
      path: '/ui',
      component: Ui
    }, {
      path: '/cg',
      component: Cg
    }, {
      path: '/offlce',
      component: Offlce
    }, {
      path: '/mechanical',
      component: Mechanical
    }, {
      path: '/navCard',
      component: NavCard
    }
  ]
})
