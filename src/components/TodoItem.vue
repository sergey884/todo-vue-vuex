<template>
    <div class="todoItem">
      <span>{{todo.name}}</span>
    </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      id: Number,
      name: String,
      completed: Boolean,
    }
  }
};
</script>

<style>
</style>
