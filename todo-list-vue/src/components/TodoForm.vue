<template>
  <card-base>
    <form @submit.prevent="onSubmitHandler">
      <header>
        <h3>New TODO</h3>
      </header>
      <label for="title">Title</label>
      <input id="title" type="text" required v-model="title"/>
      <label for="description">Description</label>
      <input id="description" type="text" required v-model="description"/>
      <button type="submit">ADD</button>
    </form>
  </card-base>
</template>

<script setup>
import {inject, ref} from "vue";

const title = ref('');
const description = ref('');

const submitNewTodo = inject('submitNewTodo');

const onSubmitHandler = () => {
  // call POST request methods
  // this.$emit("on-submit", this.title, this.description);
  submitNewTodo(title.value, description.value);

  // set input to blank
  title.value = "";
  description.value = "";
};
</script>

<style scoped>
form {
  display: flex;
}
</style>