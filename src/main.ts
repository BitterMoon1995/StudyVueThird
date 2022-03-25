import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'
import MyApp from "@/MyApp.vue";
createApp(MyApp).use(store).use(router).mount('#app')
