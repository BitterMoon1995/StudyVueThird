import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'
import MyApp from "@/MyApp.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(MyApp).use(store).use(router).use(ElementPlus).mount('#app')
