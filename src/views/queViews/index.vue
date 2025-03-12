<template>
    <div class="question-list">
        <header>
            <nav style="width: 100%;">
                <div>
                    <DropdownMenu :menus="menus" @item-click="handleMenuItemClick" />
                </div>
            </nav>
        </header>
        <main>
            <article v-for="(question, index) in questions" :key="index">
                <h4>{{ question.title }}</h4>
                <p>难度：{{ question.difficulty }}</p>
                <button @click="showAnswer(index)">问答题</button>
            </article>
        </main>
    </div>
</template>

<script>
import DropdownMenu from '../components/DropdownMenu.vue';
export default {
    components: {
        DropdownMenu,
    },
    data() {
        return {
            questions: [
                { title: '第1题：Javascript如何实现继承？', difficulty: '★★★★★' },
                { title: '第2题：JS中本地对象、内置对象、宿主对象有什么区别？', difficulty: '★★★★★' },
                { title: '第3题：for...in和for...of有什么区别？', difficulty: '★★★' },
                { title: '第4题：说说 Javascript 为什么会存在内存泄漏？', difficulty: '★★★★' },
                { title: '第5题：es5 中的类和es6中的class有什么区别？', difficulty: '★★★★' },
                { title: '第6题：怎么理解ES6中 Generator的使用场景？', difficulty: '★★★★★' },
                { title: '第7题：bind、call、apply 有什么区别？', difficulty: '★★★' },
                { title: '第8题：大文件怎么实现断点续传？', difficulty: '★' }
            ],
            // 菜单数据
            menus: [
                {
                    name: '忽略已掌握',
                    items: ['忽略已掌握', '不过滤'],
                },
                {
                    name: '更新时间降序',
                    items: ['默认排序', '难度升序↓', '难度降序↑', '更新时间升序↓', '更新时间降序↑'],
                },
                {
                    name: '菜单3',
                    items: ['子菜单3-1', '子菜单3-2', '子菜单3-3'],
                },
            ],
        };
    },
    methods: {
        showAnswer(index) {
            // 这里可以添加显示答案的逻辑
            console.log(`显示第${index + 1}题的答案`);
        },
        // 处理菜单项点击事件
        // 处理菜单项点击事件
        handleMenuItemClick({ item, menuIndex, subIndex }) {
            console.log('点击的菜单项:', item);
            console.log('菜单索引:', menuIndex);
            console.log('子菜单索引:', subIndex);
            alert(`你点击了: ${item}`);
        },
    }
};
</script>

<style scoped>
html body {
    margin: 0 !important;
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