import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MyApp from "@/MyApp.vue";
import {PVR,Home} from "@/components/Miniskirt";

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
    path: '/pvr',
    name: 'pvr',
    component: PVR
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
