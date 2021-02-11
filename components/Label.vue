<template>
  <span>
    <span class="date">{{ data.date }}</span>
    <span class="title">{{ data.name }}</span>
  </span>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>
.date {
  background: pink;
  padding: .2rem .6rem;
  border-radius: 100px;
}
</style>
