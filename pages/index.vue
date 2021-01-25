<template>
  <article class="container">
    <Markdown class="introduction" :file="require('./introduction.md')" />
    <Jobs :data="require('~/data/resume.json')" />
    <Border />
    <About />
    <Border />
    <Overview2 :data="require('~/data/db.json')" />
  </article>
</template>

<script>
export default {
  data() {
    return {}
  },
  async asyncData({ params, app, store }) {
    const list = store.state.writing

    const functionWithPromise = (article) => {
      //a function that returns a promise
      return import(`~/pages/writing/${article}`)
    }

    const anAsyncFunction = async (item) => {
      return functionWithPromise(item)
    }

    const getData = async () => {
      return Promise.all(list.map((item) => anAsyncFunction(item)))
    }

    return getData().then((data) => {
      return { writing: data }
    })
  },
}
</script>

<style lang="scss">
/* cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s; */
.container {
  font-size: 16px;
  line-height: 1.8;
  margin: 0 auto;
}

.profile {
  max-width: 10rem;
  border-radius: 100rem;
}

.introduction {
  padding-top: 20vh;
  font-family: "Unna", sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 1.2em;
  font-size: 2.5rem;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 0px;
}

.introduction > * {
  max-width: 30ch;
}

.list {
  padding: 3rem;
}

@media screen and (max-width: 600px) {
  .content,
  .hero,
  .list {
    padding: 1rem;
  }
}
</style>
