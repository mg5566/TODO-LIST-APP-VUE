<template>
  <header>
    <h1>TODO LIST</h1>
    <router-link to="/todos">Todo List</router-link>
    <router-link to="/add">Add todo</router-link>
    <router-link to="/dones">Done List</router-link>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 7rem;
  background-color: gray;
}

a {
  font: inherit;
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active {
  color: white;
  border-color: #2c3e50;
  background-color: #2c3e50;
}
</style>
