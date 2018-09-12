import Vue from 'vue';
import { ADD_NEW_TODO, DELETE_TODO, COMPLETE_TODO } from './mutation-types';

export default {
  [ADD_NEW_TODO](state, payload) {
    state.todoList.push(payload);
  },
  [DELETE_TODO](state, payload) {
    const newToDoList = state.todoList.filter(item => item.id !== payload);

    Vue.set(state, 'todoList', newToDoList);
  },
  [COMPLETE_TODO](state, payload) {
    const newToDoList = state.todoList.map((item) => {
      const newToDo = { ...item };
      if (newToDo.id === payload) {
        newToDo.completed = !item.completed;
      }
      return newToDo;
    });

    Vue.set(state, 'todoList', newToDoList);
  },
};
