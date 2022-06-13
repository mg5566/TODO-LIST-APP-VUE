<template>
  <form @submit.prevent="submitNewTodo">
    <header>
      <h3>New TODO</h3>
    </header>
    <label for="title">Title</label>
    <input id="title" type="text" required v-model="title"/>
    <label for="description">Description</label>
    <input id="description" type="text" required v-model="description"/>
    <button type="submit">ADD</button>
  </form>
</template>

<script>
import calcDate from "@/utils/calcDate";
import axios from "axios";

const FIREBASE_DOMAIN = "https://todoappvue-d3b68-default-rtdb.firebaseio.com/";

export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    submitNewTodo() {
      console.log("Title", this.title, "Description", this.description);
      // create todo item
      const todoItem = {
        id: this.title,
        title: this.title,
        description: this.description,
        status: "TODO",
        date: calcDate(),
      }
      // fetch new todo to Back-end DB
      axios.post(`${FIREBASE_DOMAIN}/todos.json`, todoItem)
          .then((response) =>
              console.log("[SUCCESS]TODO POST", response)
          )
          .catch((error) =>
              console.warn("[ERROR]TODO POST", error)
          );

      // set input to blank
      this.title = "";
      this.description = "";

      // todo spec
      /*
      todoItem = {
        id: this.title,
        title: this.title,
        description: this.description,
        status: "TODO",  // TODO, INPROGRESS, DONE
        date: calcDate();
        //date: "2022.06.13 14:05:46"  // new Date() 를 사용하여 새로운 날짜 생성
      }
      */
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
</style>