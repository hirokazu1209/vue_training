import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../views/ButtonView.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('../views/ModalView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/FormView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
