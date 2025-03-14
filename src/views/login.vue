<template>
  <div class="login-container">
    <h1 class="login-title">测试</h1>
    <form>
      <div class="input-group">
        <input type="text" v-model="username" placeholder="用户名" required />
      </div>
      <div class="input-group">
        <input v-model="password" placeholder="密码" required />
      </div>
      <button @click="handleLogin" class="login-button">登录</button>
    </form>
  </div>
</template>

<script>
import {  getData } from '@/api/api';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  mounted() {
    // 页面加载时自动获取用户的 IP 地址并发送到服务器
    this.getUserIpAndLogin();
    // getData();
  },
  methods: {
    async getUserIpAndLogin(username, password) {

    },
    handleLogin() {
      // 处理登录逻辑

      // 处理登录逻辑
      console.log('登录成功');
      console.log('准备跳转到主页'); // 调试信息
      this.$router.push({ path: '/home' })
        .then(() => {
          console.log('跳转成功');
        })
        .catch(err => {
          console.error('跳转失败:', err); // 捕获跳转错误
        });

    },
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  /* 确保 html 和 body 高度为 100% */
}

form{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  /* 高度撑满视口 */
  width: 100vw;
  /* 宽度撑满视口 */
  background-color: #f5f5f5;
  /* 背景颜色 */
}
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* 高度撑满视口 */
  width: 100vw;
  /* 宽度撑满视口 */
  background-color: #f5f5f5;
  /* 背景颜色 */
}

.login-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  /* 标题颜色 */
}

.input-group {
  margin-bottom: 15px;
}

input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 25px;
  /* 圆滑边角 */
  font-size: 1rem;
}

input:focus {
  border-color: #FF4040;
  /* 聚焦时边框颜色 */
  outline: none;
}

.login-button {
  width: 300px;
  padding: 10px;
  background-color: #FF4040;
  /* 抖音红色 */
  color: white;
  border: none;
  border-radius: 25px;
  /* 圆滑边角 */
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #e0243e;
  /* 悬停时颜色 */
}
</style>