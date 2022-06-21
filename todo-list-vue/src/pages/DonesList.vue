<template>
  <h2>Done List Page</h2>
  <todo-list :listSrc="donesData"></todo-list>
</template>

<script setup>
import TodoList from "../components/TodoList";
import {inject} from "vue";

const todosData = inject('todos');
const donesData = todosData.value.filter((todo) => todo.status === 'DONE')
console.log("filtered data", donesData);
</script>