<template>
  <footer>
    <span>{{ year }}</span>
    <nuxt-link to="/">index</nuxt-link>
    <a href="https://github.com/StefKors" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://linkedin.com/in/stefkors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="mailto:stef.kors@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
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
  padding: 8rem 1rem 4rem;
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