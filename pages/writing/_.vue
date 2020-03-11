<template>
  <article class="container">
    <div class="hero">
      <h1>{{title}}</h1>
    </div>
    <div class="content">
      <div :is="writing.vue.component" />
    </div>
  </article>
</template>

<script>
import Markdown from "~/components/Markdown.vue"

export default {
  data() {
    return {
      writing: {
        vue: {
          component: "404",
        },
      },
    }
  },
  components: {
    Markdown,
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

    return getData()
      .then(async data => {
        let returnArticle = undefined

        const singleArticle = data.filter(article => {
          const articleUrl = article.attributes.title
            .replace(/\W+/g, "-")
            .toLowerCase()
          const slug = params.pathMatch

          return articleUrl === slug
        })

        return { title: singleArticle[0].attributes.title, writing: singleArticle[0] }
      })
      .catch(e => {
        error({ statusCode: 404, message: "Post not found" })
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
  max-width: 33rem;
  }

.introduction {
  max-width: 33rem;
}

.list {
  padding: 3rem;
}
</style>
