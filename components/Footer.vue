<template>
  <footer>
    <span>{{ year }}</span>
    <nuxt-link to="/colofon">Colofon</nuxt-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss">
footer {
  text-align: center;
  padding: 4rem 1rem;
  opacity: 0.5;
  font-size: 0.8rem;

  a {
    border-bottom: 1px solid var(--bg-light);
  }

  & > * {
    margin: 0.5rem;
  }
}
</style>