<template>
  <div class="default-layout">
    <Nav>
      <Navigation />
      <!-- <UItoggle /> -->
    </Nav>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client && window) {
      window.history.scrollRestoration = "auto"
    }
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Unna&display=swap");
@import url("https://rsms.me/inter/inter.css");

html {
  @include genColorSet($button-theme);
  @include genColorSet($light-theme);
}

@media (prefers-color-scheme: dark) {
  html {
    @include genColorSet($dark-theme);
  }
}

html {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 1.25;
  background: var(--bg);
  color: var(--color);

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  scroll-behavior: smooth;

  @supports (font-variation-settings: normal) {
    font-family: "Inter var", sans-serif;
  }
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

*,
*:before,
*:after {
  box-sizing: inherit;
}

img {
  width: 100%;
}

em {
  font-style: normal;
  padding: 6px 3px 3px 3px;
  border-radius: 30px;
  border: 1px solid;
}

p {
  margin: 1rem 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.default-layout {
  margin: 3rem;
  position: relative;
  display: block;

  @media only screen and (max-width: 600px) {
    margin: 0.5rem;
  }
}

.longform {
  max-width: 70ch;

  h1,
  h2,
  h3,
  h4 {
    font-family: "Inter var", sans-serif;
  }

  p {
    max-width: 55ch;
  }

  p,
  li {
    font-size: 18px;
    letter-spacing: -0.0143007em;
    line-height: 1.37;
  }

  li {
    margin: 1rem 0;
  }
}

.markdown {
  a {
    border-bottom: 1px solid var(--bg-light);
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;

    &:hover {
      border-bottom: 1px solid var(--accent);
    }
  }
}

.light .longform li {
  list-style-image: url("~assets/Icons/Chevron/Light/Right.svg");
}

.dark .longform li {
  list-style-image: url("~assets/Icons/Chevron/Dark/Right.svg");
}
</style>
