<template>
  <div class="dropdown-menu">
    <!-- 菜单按钮 -->
    <div v-for="(menu, index) in menus" :key="index" class="menu-button" @mouseenter="openDropdown(index)"
      @mouseleave="closeDropdown(index)">
      <!-- 显示菜单名称和选中的值 -->
      <span class="menu-text">{{ selectedItems[index] }}</span>
      <!-- 下拉内容 -->
      <transition name="fade">
        <div v-if="activeIndex === index" class="dropdown-content">
          <div v-for="(item, subIndex) in menu.items" :key="subIndex" class="dropdown-item"
            @click="handleItemClick(item, index, subIndex)">
            <span class="item-text">{{ item }}</span>
            <!-- 选中后显示勾 -->
            <span v-if="selectedItems[index] === item" class="checkmark">✔</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    // 菜单列表，包含菜单名和子菜单
    menus: {
      type: Array,
      required: true,
      default: () => [],
    },
    // 选中的值
    selectedItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      activeIndex: null, // 当前激活的菜单索引
    };
  },
  methods: {
    // 打开下拉菜单
    openDropdown(index) {
      this.activeIndex = index;
    },
    // 关闭下拉菜单
    closeDropdown(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      }
    },
    // 处理菜单项点击事件
    handleItemClick(item, menuIndex) {
      // 通知父组件选中的值
      this.$emit('update:selectedItems', { menuIndex, item });
    },
  },
};
</script>

<style scoped>
html body {
  margin: 0 !important;
}

/* 菜单容器样式 */
.dropdown-menu {
  display: flex;
  width: 100%;
  background-color: #3498db;
  position: relative;
}

/* 菜单按钮样式 */
.menu-button {
  flex: 1;
  /* 均分宽度 */
  padding: 10px 20px;
  color: white;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  /* 超出部分隐藏 */
  white-space: nowrap;
  /* 禁止换行 */
  text-overflow: ellipsis;
  /* 超出部分显示省略号 */
}

.menu-button:hover {
  background-color: #2980b9;
}

/* 菜单文字样式 */
.menu-text {
  display: inline-block;
  max-width: 100%;
  /* 确保文字不会超出容器 */
}

/* 下拉内容样式 */
.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: left;
  /* 确保内容居左对齐 */
}

/* 下拉项样式 */
.dropdown-item {
  display: flex;
  justify-content: space-between;
  /* 文字居左，勾选图标居右 */
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  color: #333;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}

/* 下拉项文字样式 */
.item-text {
  flex: 1;
  /* 文字占据剩余空间 */
}

/* 勾选图标样式 */
.checkmark {
  margin-left: 10px;
  color: green;
  font-weight: bold;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>