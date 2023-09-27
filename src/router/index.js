import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Benefits from '../views/Benefits.vue'
import OffBoarding from '../views/OffBoarding.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: "/benefits" ,
    name: 'Benefits' , 
    component: Benefits
  } ,
  {
    path: "/offBoarding" ,
    name: 'OffBoarding' , 
    component: OffBoarding
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
