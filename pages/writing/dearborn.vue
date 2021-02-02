<template>
  <article>
    <Markdown class="longform" :file="require('./dearborn.md')" />
  </article>
</template>

<script>
export default {
  name: 'dearborn'
}
</script>

<style lang="scss">
.longform {
  margin-top: 20vh;
}
</style>