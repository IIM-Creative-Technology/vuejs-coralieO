import { createRouter, createWebHistory } from 'vue-router'
import  AdminPage from '../views/AdminPage.vue'
import  NewPage from '../views/NewPage.vue'
import  Login from '../views/Login.vue'
import  Inscription from '../views/Inscription.vue'
import  Blog from '../views/Blog.vue'
const routes = [
  {
    path: '/',
    name: 'AdminPage',
    component: AdminPage
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
    path: '/Inscription',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/Blog',
    name: 'Blog',
    component:Blog
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
  history: createWebHistory(),
  routes
})

export default router
