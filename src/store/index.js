// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        // 存储菜单的选中值
        selectedItems: ['不过滤', '默认排序', '子菜单3-1'], // 默认值
    },
    mutations: {
        // 更新选中值
        updateSelectedItems(state, { menuIndex, item }) {
            state.selectedItems.splice(menuIndex, 1, item); // 更新对应菜单的选中值
        },
    },
    actions: {
        // 异步更新选中值（如果需要）
        updateSelectedItems({ commit }, payload) {
            commit('updateSelectedItems', payload);
        },
    },
    getters: {
        // 获取选中值
        selectedItems: (state) => state.selectedItems,
    },
});