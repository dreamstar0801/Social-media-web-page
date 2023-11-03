import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import Test from '@/test/Test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
    {
      path: '/login_test',
      name: 'test',
      component:Test,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
export default router
