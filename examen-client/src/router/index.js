import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:()=> import('../components/Home.vue')
  },
  {
    path: '/vehicles/form',
    name: 'form',
    component:()=> import('../components/Form.vue')
  },
  {
    path: '/vehicles',
    name: 'vehicles',
    component:()=> import('../components/VehiclePaginationSite.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
