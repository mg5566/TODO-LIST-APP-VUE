<template>
  <!-- HEADER -->
  <header-title></header-title>
  <!-- BODY -->
  <todo-form></todo-form>
  <todo-list></todo-list>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default {
  components: {TodoList, HeaderTitle, TodoForm}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
