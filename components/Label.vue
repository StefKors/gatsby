<template>
  <span>
    <span class="date">{{ data.Date }}</span>
    <span class="title">{{ data.Project }}</span>
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

<style>
.date {
  background: pink;
  padding: .2rem .6rem;
  border-radius: 100px;
}
</style>
