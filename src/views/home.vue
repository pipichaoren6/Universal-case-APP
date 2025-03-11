<template>
  <div class="container">
    <!-- 顶部菜单按钮 -->
    <header class="header">
      <div class="menu-group">
        <div class="menu-card primary" @click="goSearch()">
          <div class="menu-content">
            <strong>搜索入口</strong>
            <span>支持通过关键字进行搜索</span>
          </div>
          <span class="action-button">开始搜索</span>
        </div>
        
        <div class="menu-card secondary" @click="goAddQue()">
          <div class="menu-content">
            <strong>快速添加</strong>
            <span>点击可快速添加题库</span>
          </div>
          <span class="action-button">开始添加</span>
        </div>
      </div>

      <div class="menu-footer">
        <span>上次刷题：2025年3月1号 03:19</span>
        <button class="continue-btn">继续刷题</button>
      </div>
    </header>

    <!-- 题库入口 -->
    <section class="question-bank">
      <h2 class="section-title">题库入口</h2>
      <div class="grid-container">
        <div 
          v-for="(item, index) in subjects" 
          :key="index"
          class="grid-item"
        >
          {{ item }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      subjects: ['CSS', 'JS', 'VUE', 'CSS', 'CSS']
    }
  },
  methods:{
    // 搜索
    goSearch(){
      this.$router.push({ path: '/queview' });
    },
    // 添加题目
    goAddQue(){
      alert("添加")
    }
  }
}
</script>

<style scoped>
/* 基础样式 */
.container {
  padding: 0 10px;
}

/* 头部样式 */
.header {
  margin-bottom: 20px;
}

.menu-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2%;
  margin-bottom: 10px;
}

.menu-card {
  padding: 10px;
  border: 2px solid #000;
  border-radius: 3px;
  background: skyblue;
  position: relative;
  min-height: 80px;
}

.menu-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menu-content span {
  font-size: 0.8em;
}

.action-button {
  position: absolute;
  bottom: 5px;
  right: 8px;
  font-size: 0.9em;
  font-weight: 500;
}

/* 菜单底部 */
.menu-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  font-size: 0.9em;
}

.continue-btn {
  padding: 3px 8px;
  border: 1px solid #000;
  background: transparent;
}

/* 题库入口 */
.section-title {
  margin: 10px 0;
  font-size: 1.1em;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid gray;
  border-left: 1px solid gray;
}

.grid-item {
  height: 33vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  transition: all 0.2s;
}

/* 辅助类 */
.primary { background: skyblue; }
.secondary { background: #f0f0f0; }
strong { font-weight: bolder; }
</style>