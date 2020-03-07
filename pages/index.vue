<template>
  <article class="container">
    <div class="hero">
      <Markdown class="introduction" :file="require('./introduction.md')" />
      <Marquee :data="require('~/data/db.json')" />
    </div>
    <div class="content">
      <Overview :data="require('~/data/db.json')" />
    </div>
    <!-- <div class="list">
      <div v-for="(item, i) in writing" :key="i">
        <MarkdownPreview class="introduction" :file="item" folder="/writing" />
      </div>
    </div> -->
  </article>
</template>

<script>
import Markdown from "~/components/Markdown.vue"
import MarkdownPreview from "~/components/Markdown-Preview.vue"
import Marquee from "~/components/Marquee.vue"
import Overview from "~/components/Overview.vue"

export default {
  data() {
    return {}
  },
  components: {
    Markdown,
    MarkdownPreview,
    Marquee,
    Overview,
  },
  async asyncData({ params, app, store }) {
    const list = store.state.writing

    const functionWithPromise = article => {
      //a function that returns a promise
      return import(`~/pages/writing/${article}`)
    }

    const anAsyncFunction = async item => {
      return functionWithPromise(item)
    }

    const getData = async () => {
      return Promise.all(list.map(item => anAsyncFunction(item)))
    }

    return getData().then(data => {
      return { writing: data }
    })
  },
}
</script>

<style>
/* cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s; */
.container {
  font-size: 16px;
  line-height: 1.8;
  margin: 0 auto;
}

.hero {
  padding: 3rem;
  background-color: papayawhip;
}

.content {
  padding: 3rem;
}

.introduction {
  max-width: 33rem;
}

.list {
  padding: 3rem;
}
</style>
