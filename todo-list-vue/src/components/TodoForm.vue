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

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  emits: ["on-submit"],
  methods: {
    onSubmitHandler() {
      // call POST request methods
      this.$emit("on-submit", this.title, this.description);

      // set input to blank
      this.title = "";
      this.description = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
</style>