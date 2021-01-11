<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

:root {
  --color: #f2f2f2;
  --bg: #333;
  --bg-light: var(--color);
  --accent: #07FFE1;
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

h1, h2, h3, h4 {

}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  border-bottom: 1px solid;
}

a:active,
a:hover {
  outline-width: 0;
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
</style>
