import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MyApp from "@/MyApp.vue";
import {Home} from "@/components/Miniskirt";
import CompositiveApi from '@/views/CompositiveApi.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/myApp',
    name: 'myApp',
    component: MyApp
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/compositive-api/:ownerName', //getDressList
    props: true, //当 props 设置为 true 时，route.params 将被设置为组件的 props。
    name: 'compositive-api',
    component: CompositiveApi
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
