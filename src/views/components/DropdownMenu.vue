<template>
  <div class="dropdown-menu">
    <!-- 菜单按钮 -->
    <div
      v-for="(menu, index) in menus"
      :key="index"
      class="menu-button"
      @mouseenter="openDropdown(index)"
      @mouseleave="closeDropdown(index)"
    >
      {{ menu.name }}
      <!-- 下拉内容 -->
      <transition name="fade">
        <div v-if="activeIndex === index" class="dropdown-content">
          <div
            v-for="(item, subIndex) in menu.items"
            :key="subIndex"
            class="dropdown-item"
            @click="handleItemClick(item, index, subIndex)"
          >
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
  },
  data() {
    return {
      activeIndex: null, // 当前激活的菜单索引
      selectedItems: [], // 存储每个菜单的选中项
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
    handleItemClick(item, menuIndex, subIndex) {
      // 更新选中项
      this.selectedItems[menuIndex] = item; // 直接赋值
      this.$emit('item-click', { item, menuIndex, subIndex }); // 向父组件传递点击的菜单项
    },
  },
};
</script>

<style scoped>
html body { margin: 0 !important; }
/* 菜单容器样式 */
.dropdown-menu {
  display: flex;
  width: 100%;
  background-color: #3498db;
  position: relative;
}

/* 菜单按钮样式 */
.menu-button {
  flex: 1; /* 均分宽度 */
  padding: 10px 20px;
  color: white;
  text-align: center;
  cursor: pointer;
}

.menu-button:hover {
  background-color: #2980b9;
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
  text-align: left; /* 确保内容居左对齐 */
}

/* 下拉项样式 */
.dropdown-item {
  display: flex;
  justify-content: space-between; /* 文字居左，勾选图标居右 */
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
  flex: 1; /* 文字占据剩余空间 */
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