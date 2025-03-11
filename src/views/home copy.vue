<template>
  <div class="container clearfix">
    <!-- 顶部菜单按钮 -->
    <div class="header clearfix">
      <div class="menuBox leftfix">
        <span class="fontBold">题目搜索</span>
        <span>支持通过关键字进行搜索~</span>
        <span class="menubox-span">开始搜索</span>
      </div>
      <div class="menuBox rightfix">
        <span class="fontBold">快速添加</span>
        <span>点击可快速添加题库~</span>
        <span class="menubox-span">开始添加</span>
      </div>
      <div class="menu-tips leftfix clearfix">
        <span class="leftfix">上次刷题：2025年3月1号 03:19</span>
        <button class="rightfix menu-button">继续刷题</button>
      </div>
    </div>
    <!-- 题库入口 -->
    <div class="bookEnter">
      <span style="font-weight:bolder;">题库入口</span>
      <div style="border:10px black;margin-top: 10px;"></div>
      <hr class="custom-hr">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.menuBox span:first-child {
  font-size: 12px;
}

.menuBox .menubox-span {
  font-size: 11px !important;
  position: absolute;
  /* 绝对定位 */
  bottom: 3px;
  /* 距离底部 10px */
  right: 8px;
  /* 距离右侧 10px */
}

.menuBox {
  width: 49%;
  height: 80px;
  position: relative;
  box-sizing: border-box;
  border: 2px solid black;
  padding: 10px;
  background-color: skyblue;
  border-radius: 3px;
  display: inline-block;
}

.menu-button {
  padding: 3px;
  border: 1px solid black;
  font-size: 14px;
}

.bookEnter {
  margin-top: 10px;
}

.custom-hr {
  height: 0;
  margin: 2px 0;
}

* {
  padding: 0;
  margin: 0;
}

.menu-tips {
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 12px;
  align-items: center;
  line-height: 3vh;
  background-color: #fff;
}

.header {
  width: 100%;
  overflow: hidden;
}

.menuBox span {
  font-size: 8px;
  display: block;
}

.fontBold {
  font-weight: bolder;
}

.leftfix {
  float: left;
}

.rightfix {
  float: right;
}

.clearfix {
  content: '';
  clear: both;
  display: block;
}
</style>