<template>
    <div class="top-bar">
        <!-- 左侧点击区域 -->
        <div v-if="showBack" class="left-area" @click="handleBack">
            <span class="arrow-left"></span> <!-- 返回图标 -->
        </div>

        <!-- 中间标题 -->
        <div class="title">{{ title }}</div> <!-- 使用 title prop -->

        <!-- 右侧点击区域 -->
        <div v-if="showCustom" class="right-area" @click="handleCustom">
            <span class="icon">⚙️</span> <!-- 自定义图标 -->
        </div>
    </div>
</template>

<script>
export default {
    name: "TopBar",
    props: {
        // 标题文字
        title: {
            type: String,
            default: "标题",
        },
        // 是否显示左侧区域
        showBack: {
            type: Boolean,
            default: true,
        },
        // 是否显示右侧区域
        showCustom: {
            type: Boolean,
            default: true,
        },
    },
    mounted() {
    },
    emits: ["back", "custom"], // 定义组件事件
    methods: {
        // 左侧区域点击事件
        handleBack() {
            this.$emit("back"); // 触发 back 事件
        },
        // 右侧区域点击事件
        handleCustom() {
            this.$emit("custom");
        },
    },
};
</script>

<style scoped>
.top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
    height: 50px;
    /* 设置一个固定高度 */
}

.title {
    flex: 1;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}

.left-area,
.right-area {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    /* 设置点击区域的宽度 */
    height: 100%;
    /* 高度与顶部栏一致 */
    cursor: pointer;
}

.icon {
    font-size: 18px;
    /* 图标大小 */
}

/* 左侧箭头图标 */
.arrow-left {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-top: 1.5px solid #666;
    border-left: 1.5px solid #666;
    transform: rotate(-45deg);
    /* 左箭头旋转角度 */
}

/* 右侧箭头图标 */
.arrow-right {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-top: 0.01rem solid #666;
    border-left: 0.01rem solid #666;
    transform: rotate(135deg);
    /* 右箭头旋转角度 */
}
</style>