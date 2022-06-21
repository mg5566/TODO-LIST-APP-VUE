<template>
  <h2>Todos List Page</h2>
  <p v-if="isLoading">is loading</p>
  <p v-else-if="!isLoading && todoData.length === 0">is empty</p>
  <todo-list :listSrc="todoData"></todo-list>
</template>

<script setup>
import TodoList from '../components/TodoList';
import {inject} from "vue";

const todoData = inject('todos');
console.log(todoData.value.length)

const isLoading = inject('isLoading');
console.log('isLoading', isLoading);
</script>