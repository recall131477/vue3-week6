import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // 前台
  {
    path: '/',
    name: 'front',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/IndexView.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/CartView.vue'),
      },
    ],
  },
  // 登入
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  // 後台
  {
    path: '/admin',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: 'adminProducts',
        component: () => import('../views/AdminProducts.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active', // bootstrap
});

export default router;
