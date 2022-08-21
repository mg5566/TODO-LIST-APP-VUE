<template>
  <h2>Todos List Page</h2>
  <p v-if="isLoading">is loading</p>
  <p v-else-if="!isLoading && todoData.length === 0">is empty</p>
  <todo-list :listSrc="todoData"></todo-list>
  <button @click.prevent="clickCountHandler">Count up</button>
  <div>count = {{ countStore.getFuckingCountString }}</div>
</template>

<script setup>
import TodoList from '../components/TodoList';
import {inject} from "vue";
import { useCount } from '../store/useCount.ts';

const countStore = useCount();
console.log('getFuckingCountString', countStore.getFuckingCountString);

const clickCountHandler = () => {
  console.log('fucking clicked');
  countStore.count++;
}

const todoData = inject('todos');

const isLoading = inject('isLoading');
</script>
