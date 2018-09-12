import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [],
  },
  getters: {
    getTodoList: state => state.todoList,
  },
  mutations,
});

export default store;
