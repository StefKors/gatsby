<template>
  <div class="default-layout">
    <Nav>
      <Navigation />
      <UItoggle />
    </Nav>
    <nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Unna&display=swap");
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

html.light {
  --color: #333;
  --bg: #f2f2f2;
  --bg-light: rgb(110, 110, 110);
  --accent: #e84b3f;
  --accent-dark: #d2493f;
}

:root,
html.dark {
  --color: #f2f2f2;
  --bg: #333;
  --bg-light: rgb(110, 110, 110);
  --accent: #07ffe1;
  --accent-dark: #04b4a0;
}

@media (prefers-color-scheme: light) {
  :root {
    --color: #333;
    --bg: #f2f2f2;
    --bg-light: rgb(110, 110, 110);
    --accent: #e84b3f;
    --accent-dark: #d2493f;
  }
}

html {
  font-size: 18px;
  line-height: 1.25;
  background: var(--bg);
  color: var(--color);

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4 {
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
  
  p, li {
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
