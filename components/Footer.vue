<template>
  <footer>
    <div class="r1">
      <span>{{ year }}</span>
      <nuxt-link to="/">index</nuxt-link>
      <a
        href="https://github.com/StefKors"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub</a
      >
      <a rel="me" href="https://subculture.chat/@stef">Mastodon</a>
      <a
        href="https://linkedin.com/in/stefkors"
        target="_blank"
        rel="noopener noreferrer"
        >LinkedIn</a
      >
      <a
        href="mailto:stef.kors@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        >Email</a
      >
      <nuxt-link to="/colofon">Colofon</nuxt-link>
    </div>
    <div class="r2">
      <nuxt-link to="/writing/dearborn">/writing/dearborn</nuxt-link>
    </div>
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

<style lang="scss" scoped>
footer {
  text-align: center;
  padding: 8rem 1rem 4rem;
  opacity: 0.5;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  a {
    border-bottom: 1px solid var(--bg-light);
  }

  a,
  span {
    margin: 0.5rem;
  }
}
</style>
