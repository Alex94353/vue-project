import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('@/views/MenuView.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/CartView.vue'),
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('@/views/FavoritesView.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/SignInView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
