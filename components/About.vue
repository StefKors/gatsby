<template>
  <div class="about-wrapper">
    <h2>About me</h2>
    <Markdown class="about" :file="require('~/assets/about-short.md')" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about-wrapper {
  display: grid;
  grid-template-columns: 30ch 1fr;
  gap: 1rem;
  max-width: 80ch;
  margin: auto;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
</style>

