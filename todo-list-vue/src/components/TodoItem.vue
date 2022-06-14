<template>
  // TODO: item의 id 를 사용하여 update 기능 추가하기
  <card-base>
    <h2>TITLE - {{ item.title }}</h2>
    <div>
      <p>DESCRIPTION</p>
      <p>{{ item.description }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.status }}</p>
    </div>
    // TODO: update button 추가하기
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