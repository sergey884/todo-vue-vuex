<template>
    <form>
        <input type="text" v-model="todoText" />
        <button v-on:click.prevent="addNewTodo()">ADD</button>
    </form>
</template>

<script>
import { ADD_NEW_TODO } from '../store/mutation-types';

export default {
  name: 'AddTodo',
  data: function () {
      return {
          todoText: '',
      }
  },
  methods: {
      addNewTodo: function () {
        const todos = this.$store.getters.getTodoList;
        const newTodo = {
            id: todos.length,
            name: this.todoText,
            completed: false,
        };

        this.$store.commit(ADD_NEW_TODO, newTodo);
        this.todoText = '';
      }
  }
}
</script>

<style>

</style>
