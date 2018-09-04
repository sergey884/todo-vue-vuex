import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_NEW_TODO } from './mutation-types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [],
  },
  getters: {
    getTodoList: state => state.todoList,
  },
  mutations: {
    [ADD_NEW_TODO](state, payload) {
      state.todoList.push(payload);
    },
  },
});

export default store;
