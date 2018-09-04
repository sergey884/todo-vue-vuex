<template>
  <div>
    <div>Hello from {{ name }}</div>
		<AddTodo />
		<TodoList />
	</div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  data: function() {
    return {
      name: "Vue - Vuex"
    };
  },
  components: {
    AddTodo,
    TodoList
  }
};
</script>

<style>
</style>
