<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <card-base>
        <h2>TITLE - {{ todo.title }}</h2>
        <div>
          <p>DESCRIPTION</p>
          <p>{{ todo.description }}</p>
          <p>{{ todo.date }}</p>
          <p>{{ todo.status }}</p>
        </div>
      </card-base>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

const FIREBASE_DOMAIN = "https://todoappvue-d3b68-default-rtdb.firebaseio.com/";

export default {
  created() {
    // data fetching
    axios.get(`${FIREBASE_DOMAIN}/todos.json`)
        .then((response) => {
          return response.data;
        }).catch((error) => console.warn("ERROR GET", error))
        .then((data) => {
          // transform
          const transformedData = [];

          for (const key in data) {
            const todoObj = {
              id: key,
              ...data[key],
            };

            transformedData.push(todoObj);
          }

          this.todos = transformedData;
        });
  },
  data() {
    return {
      todos: [],
    };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>