import Vue from 'vue'
import Router from 'vue-router'
import DragBox from '@/components/DragBox'
import Patrol from '@/components/video/PatrolDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Patrol',
      component: Patrol
    },
    {
      path: '/drgs-box',
      name: 'DragBox',
      component: DragBox
    }
  ]
})
