<template>
    <div class="question-list">

        <!-- 使用 TopBar 组件 -->
        <TopBar :title="subject" :showBack="true" :showCustom="true" @back="handleBack" @custom="handleCustom" />
        <header>
            <nav style="width: 100%;">
                <div>
                    <!-- 使用 DropdownMenu 组件 -->
                    <DropdownMenu :menus="menus" :selected-items="selectedItems"
                        @update:selectedItems="updateSelectedItems" />
                </div>
            </nav>
        </header>
        <main>
            <article v-for="(question, index) in questions" :key="index">
                <h4>{{ question.title }}</h4>
                <div>
                    <p>难度：{{ question.difficulty }}</p>
                    <button @click="showAnswer(index)">问答题</button>
                </div>
            </article>
        </main>
    </div>
</template>

<script>
import DropdownMenu from '../components/DropdownMenu.vue';
import TopBar from "../components/TopBar.vue"; // 引入 TopBar 组件
import { mapState, mapMutations } from 'vuex'; // 引入 Vuex 辅助函数

export default {
    name: 'QueView',
    components: {
        DropdownMenu,
        TopBar,
    },
    data() {
        return {
            subject: '', // 初始化 subject
            questions: [
                { title: '第1题：Javascript如何实现继承？', difficulty: '★★★★★' },
                { title: '第2题：JS中本地对象、内置对象、宿主对象有什么区别？', difficulty: '★★★★★' },
                { title: '第3题：for...in和for...of有什么区别？', difficulty: '★★★' },
                { title: '第4题：说说 Javascript 为什么会存在内存泄漏？', difficulty: '★★★★' },
                { title: '第5题：es5 中的类和es6中的class有什么区别？', difficulty: '★★★★' },
                { title: '第6题：怎么理解ES6中 Generator的使用场景？', difficulty: '★★★★★' },
                { title: '第7题：bind、call、apply 有什么区别？', difficulty: '★★★' },
                { title: '第8题：大文件怎么实现断点续传？', difficulty: '★' },
            ],
            // 菜单数据
            menus: [
                {
                    name: '忽略已掌握',
                    items: ['忽略已掌握', '不过滤'],
                },
                {
                    name: '排序方式',
                    items: ['默认排序', '难度升序', '难度降序', '更新时间升序', '更新时间降序'],
                },
                {
                    name: '菜单3',
                    items: ['子菜单3-1', '子菜单3-2', '子菜单3-3'],
                },
            ],
        };
    },
    mounted() {
        this.subject = this.$route.query.subject; // 获取题库名称
    },
    computed: {
        // 从 Vuex 中获取选中的值
        ...mapState(['selectedItems']),
    },
    methods: {
        showAnswer(index) {
            console.log(`显示第${index + 1}题的答案`);
        },
        // 更新选中的值
        ...mapMutations(['updateSelectedItems']),
        // 返回上一页
        handleBack() {
            window.history.back(); // 调用浏览器的返回功能
        },
        // 自定义按钮点击事件
        handleCustom() {
            console.log("自定义按钮被点击");
            alert("自定义按钮被点击");
        },
    },
};
</script>



<style scoped>
html body {
    margin: 0 !important;
}

h4{
    margin: 0;
}

.question-list {
    font-family: Arial, sans-serif;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px; */
}

nav select {
    margin-left: 10px;
}

article {
    border-bottom: 1px solid #ddd;
    padding: 10px;
}

article div {
    display: flex;
    justify-content: space-between;
    height: 5vh;
    align-items: center;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>