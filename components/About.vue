<template>
  <div class="about-wrapper">
    <h2>About me</h2>
    <Markdown class="about" :file="require('~/assets/about.md')" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
.about-wrapper {
  display: grid;
  grid-template-columns: 30ch 1fr;
  gap: 1rem;
  max-width: 80ch;
  margin: auto;
}

h2 {
    font-family: "Unna", sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 1.2em;
  font-size: 2rem;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 0px;
}

.about a {
  border-bottom: 1px solid var(--bg-light);
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
}

.about a:hover {
  border-bottom: 1px solid var(--accent);
}
</style>

