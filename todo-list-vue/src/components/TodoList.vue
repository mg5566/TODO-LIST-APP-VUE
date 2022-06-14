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
export default {
  props: ["todos"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>