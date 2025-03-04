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
import { login, getData } from '@/api/api';
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
    getData();
  },
  methods: {
    // getUserIpAndLogin() {
    //   // 获取用户的 IP 地址
    //   return new Promise((resolve, reject) => {
    //     fetch('https://api64.ipify.org/?format=json') // 使用一个公共 API 获取 IP 地址
    //       .then(response => {
    //         if (!response.ok) {
    //           reject('网络请求失败'); // 如果请求失败，拒绝 Promise
    //           return;
    //         }
    //         return response.json(); // 解析 JSON 数据
    //       })
    //       .then(data => {
    //         const loginTime = new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Shanghai' }).replace('T', ' '); // 获取本地时间并格式化为 'YYYY-MM-DD HH:mm:ss'
    //         const userIp = data.ip; // 获取 IP 地址
    //         console.log('用户 IP:', userIp);
    //         // 加密 IP 地址
    //         const encryptedIp = btoa(userIp); // 使用 base64 编码进行简单加密
    //         // 进行登录请求
    //         return login(this.username, this.password, encryptedIp, loginTime); // 将 IP 地址传递给登录 API
    //       })
    //       .then(response => {
    //         console.log('成功:', response.data);
    //       })
    //       // .then(() => {
    //       //   return getData(); // 将 getData() 放在 Promise 链中
    //       // })
    //       // .then((response) => {
    //       //   console.log('get请求:  ' + JSON.stringify(response.data));

    //       // })
    //       .catch(error => {
    //         console.error('错误:', error);
    //       });
    //   })

    // },
    async getUserIpAndLogin(username, password) {
  try {
    const response = await fetch('https://api64.ipify.org/?format=json');
    if (!response.ok) throw new Error('网络请求失败');

    const { ip } = await response.json();
    const loginTime = new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Shanghai' }).replace('T', ' ');
    console.log('用户 IP:', ip);

    // 使用 base64 编码进行简单加密
    const encryptedIp = btoa(ip);

    // 执行登录操作
    const loginResponse = await login(username, password, encryptedIp, loginTime);
    console.log('成功:', loginResponse.data);

    // 下面的代码可以根据实际需求决定是否保留
    // const getDataResponse = await getData();
    // console.log('get请求:  ' + JSON.stringify(getDataResponse.data));
  } catch (error) {
    console.error('错误:', error);
  }
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
  border-color: #ff2d55;
  /* 聚焦时边框颜色 */
  outline: none;
}

.login-button {
  width: 300px;
  padding: 10px;
  background-color: #ff2d55;
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