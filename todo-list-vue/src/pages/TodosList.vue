<template>
  <h2>Todos List Page</h2>
  <todo-list :listSrc="todoData"></todo-list>
</template>

<script setup>
import TodoList from '../components/TodoList';
import {inject} from "vue";

const todoData = inject('todos');
</script>