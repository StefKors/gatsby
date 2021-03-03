<template>
  <article>
    <Markdown class="longform" :file="require('./colofon.md')" />
    <ul class="list">
      <li class="item">
        Icons:
        <a
          href="https://icons.modulz.app/"
          target="_blank"
          rel="noopener noreferrer"
          >Radix by Modulz</a
        >
      </li>
      <li class="item">
        Typeface:
        <a
          href="https://fonts.google.com/specimen/Unna"
          target="_blank"
          rel="noopener noreferrer"
          >Unna by Omnibus-Type</a
        >
      </li>
      <li class="item">
        Typeface:
        <a
          href="https://rsms.me/inter/"
          target="_blank"
          rel="noopener noreferrer"
          >Inter by Rasmus Andersson</a
        >
      </li>
    </ul>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss">
.list {
  color: var(--bg-light);
  padding-top: 5rem;

  li {
    all: unset;
    display: block;
    line-height: 1.5;
  }

  a {
    border-bottom: 1px solid var(--bg-light);
    color: var(--color);
  }
}
</style>
