import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/ui/views/HomeView.vue'
import LoginView from '@/ui/views/registration/LoginView.vue'
import SignUpView from "@/ui/views/registration/SignUpView.vue";
import AccountRecoveryView from "@/ui/views/registration/AccountRecoveryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/accountRecovery',
      name: 'accountRecovery',
      component: AccountRecoveryView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('@/ui/views/AboutView.vue'),
    },
  ],
})

export default router
