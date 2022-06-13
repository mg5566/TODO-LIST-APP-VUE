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
      //  fetch new todo to Back-end DB
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
</style>