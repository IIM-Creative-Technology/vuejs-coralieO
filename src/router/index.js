import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import  AdminPage from '../views/AdminPage.vue'
import  NewPage from '../views/NewPage.vue'
import  Login from '../views/Login.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Admin',
    name: 'AdminPage',
    component: AdminPage
  },
  {
    path: '/New',
    name: 'NewPage',
    component: NewPage
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
