<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Overpass:100,100i,200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i");

html {
  font-family: "Overpass", sans-serif !important;
  font-size: 16px;
  line-height: 28px;
  background: #f2f2f2;
  color: #15241a;

  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
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
