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
          <!-- 添加最后一句的副本 -->
          <div class="quote-item">
            <div class="quote-chinese">{{ quotes[quotes.length - 1].chinese }}</div>
            <div class="quote-english">{{ quotes[quotes.length - 1].english }}</div>
          </div>
          <!-- 正常语录 -->
          <div v-for="(quote, index) in quotes" :key="index" class="quote-item">
            <div class="quote-chinese">{{ quote.chinese }}</div>
            <div class="quote-english">{{ quote.english }}</div>
          </div>
          <!-- 添加第一句的副本 -->
          <div class="quote-item">
            <div class="quote-chinese">{{ quotes[0].chinese }}</div>
            <div class="quote-english">{{ quotes[0].english }}</div>
          </div>
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
        { chinese: "坚持就是胜利", english: "Persistence leads to victory." },
        { chinese: "每一天都是新的开始", english: "Every day is a new beginning." },
        { chinese: "努力不一定成功，但放弃一定失败", english: "Effort may not guarantee success, but giving up ensures failure." },
        { chinese: "成功的路上并不拥挤，因为坚持的人不多", english: "The road to success is not crowded because few people persist." },
        { chinese: "不要害怕慢，只要你在前进", english: "Don't be afraid of being slow, as long as you are moving forward." },
        { chinese: "你今天的努力，是幸运的伏笔", english: "Your efforts today are the foreshadowing of luck tomorrow." },
        { chinese: "梦想不会发光，发光的是追梦的你", english: "Dreams don't shine; it's you chasing your dreams that shines." },
        { chinese: "生活不会辜负每一个努力的人", english: "Life will not let down those who work hard." },
        { chinese: "失败是成功的垫脚石", english: "Failure is the stepping stone to success." },
        { chinese: "你有多努力，就有多特殊", english: "The harder you work, the more special you become." }
      ],
      translateX: -100, // 初始偏移量（从第一句开始）
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
        this.currentIndex = (this.currentIndex + 1) % (this.quotes.length + 2);
        this.translateX = -100 * (this.currentIndex + 1);

        // 滑动到最后一句的副本时，无缝切换到第一句
        if (this.currentIndex === this.quotes.length + 1) {
          setTimeout(() => {
            this.currentIndex = 0;
            this.translateX = -100;
          }, 500); // 500ms 延迟，确保无缝切换
        }
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
  height: 80px; /* 固定高度，确保滑动时高度一致 */
  margin-bottom: 10px;
}

/* 语录滑动区域 */
.quote-slider {
  display: flex;
  transition: transform 0.5s ease-in-out; /* 平滑过渡 */
  height: 100%; /* 确保高度占满父容器 */
}

/* 每条语录 */
.quote-item {
  flex: 0 0 100%; /* 每条语录占满容器宽度 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  text-align: center; /* 文本居中 */
  white-space: normal; /* 允许换行 */
  padding: 10px; /* 增加内边距 */
  box-sizing: border-box; /* 确保内边距不影响宽度 */
}

/* 中文语录 */
.quote-chinese {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 5px; /* 中文和英文之间的间距 */
  word-break: break-word; /* 允许单词换行 */
}

/* 英文语录 */
.quote-english {
  font-size: 0.9em;
  color: #666;
  word-break: break-word; /* 允许单词换行 */
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