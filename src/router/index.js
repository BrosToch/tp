import Vue from 'vue'
import VueRouter from 'vue-router'
import login_page from '@/views/login_page.vue'
import home_page from '@/views/home_page.vue'
import user_infor from '@/views/user_information.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'login',
    component: login_page
  },
  {
    path: '/homepage',
    name: 'home_page',
    component: home_page
  },
  {
    path: '/user_infor',
    name: 'user_infor',
    component: user_infor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
