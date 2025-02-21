import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/ui/views/HomeView.vue'
import LoginView from '@/ui/views/registration/LoginView.vue'
import SignUpView from "@/ui/views/registration/SignUpView.vue";
import AccountRecoveryView from "@/ui/views/registration/AccountRecoveryView.vue";
import TrueHomeView from "@/ui/views/TrueHomeView.vue";
import AboutView from "@/ui/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TrueHomeView,
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
    {
      path: '/game',
      name: 'game',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ],
})

export default router
