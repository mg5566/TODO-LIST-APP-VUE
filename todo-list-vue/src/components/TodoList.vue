<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <h2>TITLE - {{ todo.title }}</h2>
      <div>
        <p>DESCRIPTION</p>
        <p>{{ todo.description }}</p>
        <p>{{ todo.date }}</p>
        <p>{{ todo.status }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

const FIREBASE_DOMAIN = "https://todoappvue-d3b68-default-rtdb.firebaseio.com/";

export default {
  created() {
    axios.get(`${FIREBASE_DOMAIN}/todos.json`)
        .then((response) => {
          return response.data;
        }).catch((error) => console.warn("ERROR GET", error))
        .then((data) => {
          const transformedData = [];

          for(const key in data) {
            const todoObj = {
              id: key,
              ...data[key],
            }

            transformedData.push(todoObj);
          }

          this.todos = transformedData;
        })
  },
  data() {
    return {
      todos: [],
    };
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
  border: 1px solid #2c3e50;
  border-radius: 16px;
  margin: 1rem;
}
</style>