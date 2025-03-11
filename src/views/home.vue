<template>
  <div class="container">
    <!-- 顶部菜单按钮 -->
    <header class="header">
      <div class="menu-group">
        <div class="menu-card primary" @click="goSearch()">
          <div class="menu-content">
            <strong>知识搜索</strong>
            <span>支持通过题目和答案进行搜索</span>
          </div>
          <span class="action-button">开始搜索👉</span>
        </div>
        
        <div class="menu-card secondary" @click="goAddQue()">
          <div class="menu-content">
            <strong>快速添加</strong>
            <span>点击可快速添加题库</span>
          </div>
          <span class="action-button">开始添加👉</span>
        </div>
      </div>
      <!-- 鸡汤语录 -->
      <div class="quote-container">
        <div class="quote-slider" :style="{ transform: `translateX(${translateX}%)` }">
          <span v-for="(quote, index) in quotes" :key="index" class="quote-item">
            {{ quote }}
          </span>
        </div>
      </div>
      <div class="menu-footer">
        <span>上次刷题：2025年3月1号 03:19</span>
        <button class="continue-btn">💪继续👶刷题👉</button>
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
      subjects: ['CSS', 'JS', 'VUE', 'CSS', 'CSS'],
      quotes: [
        "坚持就是胜利",
        "每一天都是新的开始",
        "努力不一定成功，但放弃一定失败",
        "成功的路上并不拥挤，因为坚持的人不多",
        "不要害怕慢，只要你在前进",
        "你今天的努力，是幸运的伏笔",
        "梦想不会发光，发光的是追梦的你",
        "生活不会辜负每一个努力的人",
        "失败是成功的垫脚石",
        "你有多努力，就有多特殊"
      ],
      translateX: 0, // 初始偏移量
      currentIndex: 0 // 当前显示的语录索引
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
    },
    // 滑动语录
    slideQuotes() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.quotes.length;
        this.translateX = -this.currentIndex * 100;
      }, 3000); // 每 3 秒切换一次
    }
  },
  mounted() {
    this.slideQuotes();
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

/* 鸡汤语录容器 */
.quote-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 30px; /* 根据内容调整高度 */
  margin-bottom: 10px;
}

/* 语录滑动区域 */
.quote-slider {
  display: flex;
  transition: transform 0.5s ease-in-out; /* 平滑过渡 */
}

/* 每条语录 */
.quote-item {
  flex: 0 0 100%; /* 每条语录占满容器宽度 */
  text-align: center;
  white-space: nowrap;
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