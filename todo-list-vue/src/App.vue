<template>
  <!-- HEADER -->
  <header-title></header-title>
  <!-- BODY -->
  <todo-form></todo-form>

</template>

<script>
import HeaderTitle from "@/components/HeaderTitle";
import TodoForm from "@/components/TodoForm";

export default {
  components: {HeaderTitle, TodoForm}
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
