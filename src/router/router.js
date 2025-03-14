   // src/router.js
   import { createRouter, createWebHistory } from 'vue-router' 

   // 懒加载组件
   const login = () => import('@/views/login.vue')
   const home = () => import('@/views/home.vue')
   const queview = () => import('@/views/queViews/index.vue')
   const ansview = () => import('@/views/ansViews/index.vue')



const routes = [
      //登录页
     { path: '', component: login },
     //主页
     { path: '/home', component: home },
     //题库页
     { path: '/queview', component: queview },
     //回答页
     { path: '/queview', component: queview },
]


   const router = createRouter({
       history: createWebHistory(),
       routes
   })

   export default router