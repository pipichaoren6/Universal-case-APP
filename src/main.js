import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router' // 引入路由
import VConsole from 'vconsole'; // 引入 vConsole
import '@/permission' // permission control
import Swal from 'sweetalert2' // 导入 SweetAlert2
import 'sweetalert2/dist/sweetalert2.min.css' // 导入 SweetAlert2 的样式
import swal from '@/utils/swal' // 导入封装的弹窗工具
import store from './store'; // 引入 Vuex Store


// 初始化 vConsole
const vConsole = new VConsole();

// 创建 Vue 应用实例
const app = createApp(App)

// 全局挂载 SweetAlert2
app.config.globalProperties.$swal = Swal
app.config.globalProperties.$swal = swal


// 挂载路由和应用
app.use(router).use(store).mount('#app')