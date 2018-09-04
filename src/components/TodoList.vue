<template>
    <div>   
      <TodoItem 
        v-for="todo in todoList"
        v-bind:todo="todo"
        v-bind:key="todo.id"
      />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: "TodoList",
  data: function() {
    return {};
  },
  computed: {
    todoList: function() {
      return this.$store.getters.getTodoList;
    }
  },
  components: {
    TodoItem
  }
};
</script>

<style>
</style>
