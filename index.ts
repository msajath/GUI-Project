import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'
import ProductDetail from './ProductDetail.vue'
import LoginView from './LoginView.vue'
import SignupView from './SignupView.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
  routes: [
    { path: '/', component: HomeView },
    { path: '/product/:id', component: ProductDetail },
    { path: '/login', component: LoginView },
    { path: '/signup', component: SignupView },
  ],
})
