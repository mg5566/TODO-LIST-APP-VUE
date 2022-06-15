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
      </card-base>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

const FIREBASE_DOMAIN = "https://todoappvue-d3b68-default-rtdb.firebaseio.com/";

export default {
  props: ["todos"],
  emits: ["load-todos"],
  methods: {
    setNextStatus(id) {
      console.log("clicked id of todo", id);
      const nowTodo = this.todos.filter((todo) => todo.id === id);
      console.log("now status", nowTodo[0].status);
      const newStatus = nowTodo[0].status === "TODO" ? {status: "INPROGRESS"} : {status: "DONE"};

      if (nowTodo[0].status !== "DONE") {
        axios.patch(`${FIREBASE_DOMAIN}/todos/${id}.json`, newStatus)
            .then((response) => {
              console.log("response", response);
              this.$emit("load-todos");
            })
            .catch((error) => {
              console.warn("[ERROR] status PATCH", error);
            });
      }
    }
  }
};
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