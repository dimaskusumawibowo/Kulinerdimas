import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Foods from '../views/Foods.vue'
import Keranjang from '../views/Keranjang.vue'
import DetailFood from '../views/DetailFood.vue'
import PesananSukses from '../views/PesananSukses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Foods',
    name: 'foodsDimas',
    component: Foods
  },
  {
    path: '/Foods/:id',
    name: 'DetailFood',
    component: DetailFood
  },
  {
    path: '/Keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
  {
    path: '/PesananSukses',
    name: 'PesananSukses',
    component: PesananSukses
  },
  {
    path: '/Drinks',
    name: 'Drinks',
    component: () => import("../views/Drinks.vue")
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
