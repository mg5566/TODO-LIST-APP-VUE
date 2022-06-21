<template>
  <h2>Done List Page</h2>
  <p v-if="isLoading">is loading</p>
  <p v-else-if="!isLoading && donesData.length === 0">is empty</p>
  <todo-list :listSrc="donesData"></todo-list>
</template>

<script setup>
import TodoList from "../components/TodoList";
import {computed, inject} from "vue";

const todosData = inject('todos');
const donesData = computed(() => {
  return todosData.value.filter((todo) => todo.status === 'DONE');
})

const isLoading = inject('isLoading');
console.log('isLoading', isLoading);
</script>