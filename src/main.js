import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router' // 引入路由
import VConsole from 'vconsole'; // 引入 vConsole
import '@/permission' // permission control

// 初始化 vConsole
const vConsole = new VConsole();
 
createApp(App)
    .use(router)
    .mount('#app')