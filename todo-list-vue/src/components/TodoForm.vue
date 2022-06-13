<template>
  <form @submit.prevent="submitNewTodo">
    <header>
      <h3>New TODO</h3>
    </header>
    <label for="title">Title</label>
    <input id="title" type="text" v-model="title" />
    <label for="description">Description</label>
    <input id="description" type="text" v-model="description" />
    <button type="submit">ADD</button>
  </form>
</template>

<script>
import calcDate from "@/utils/calcDate";

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
      this.title = "";
      this.description ="";
      //  fetch new todo to Back-end DB
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