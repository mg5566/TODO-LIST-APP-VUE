<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo }}
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

</style>