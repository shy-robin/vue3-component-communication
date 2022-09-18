import { createRouter, createWebHistory } from 'vue-router'
import PropsEmitView from '@/views/props-emit/PropsEmitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/props-emit',
      name: 'propsEmit',
      component: PropsEmitView,
    },
  ],
})

export default router
