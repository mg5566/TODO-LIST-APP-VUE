<template>
  <card-base>
    <h2>TITLE - {{ item.title }}</h2>
    <div>
      <p>DESCRIPTION</p>
      <p>{{ item.description }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.status }}</p>
    </div>
  </card-base>
</template>

<script>
export default {
  props: ["todoItem"],
  data() {
    return {
      item: this.todoItem[0],
    }
  }
}
</script>