<template>
    <div class="todoItem">
      <span>{{todo.name}}</span>
      <input type="checkbox" v-bind:value="todo.completed" v-on:click="completeToDo" />
      <button v-on:click="deleteTodo">Delete</button>
    </div>
</template>

<script>
import { DELETE_TODO, COMPLETE_TODO } from '../store/mutation-types';

export default {
  name: "TodoItem",
  props: {
    todo: {
      id: Number,
      name: String,
      completed: Boolean,
    }
  },
  methods: {
    deleteTodo: function () {
      this.$store.commit(DELETE_TODO, this.todo.id);
    },
    completeToDo: function () {
      this.$store.commit(COMPLETE_TODO, this.todo.id);
    }
  }
};
</script>

<style>
</style>
