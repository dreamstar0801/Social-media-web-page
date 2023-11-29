import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'
import post from '@/pages/post.vue'

// Include the post route within the routes array
const allRoutes = [
  ...generatedRoutes,
  { path: '/post/:postId', component: post },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(allRoutes),
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
