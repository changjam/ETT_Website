import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import LearnPage from '../components/LearnPage.vue'
import StartPage from '../components/StartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/learn',
    name: 'learn',
    component: LearnPage
  },
  {
    path: '/start',
    name: 'start',
    component: StartPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
