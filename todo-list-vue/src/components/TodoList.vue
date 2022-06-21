<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id" @click.prevent="$emit('on-click', todo.id)">
      <card-base>
        <h2>TITLE - {{ todo.title }}</h2>
        <div>
          <p>DESCRIPTION</p>
          <p>{{ todo.description }}</p>
          <p>{{ todo.date }}</p>
          <p class="action--status" @click.stop.prevent="setNextStatus(todo.id)">{{ todo.status }}</p>
        </div>
<!--        <button @click.stop.prevent="$emit('on-delete', todo.id)">DELETE</button>-->
        <button @click.stop.prevent="deleteTodo(todo.id)">DELETE</button>
      </card-base>
    </li>
  </ul>
</template>

<script setup>
import {inject} from "vue";

const todos = inject('todos');
const deleteTodo = inject('deleteTodo');
const setNextStatus = inject('setNextStatus');

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.action--status {
  color: white;
  background-color: #2c3e50;
  margin: 1rem;
  padding: 1rem;
  border-radius: 12px;
  border-width: medium;
  border-color: skyblue;
}
</style>