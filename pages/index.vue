<template>
  <article class="container">
    <div class="hero">
      <Markdown class="introduction" :file="require('./introduction.md')" />
    </div>
    <div class="list">
      <ProjectList :data="require('~/data/db.json')" />
    </div>
    <div class="list">
      <MarkdownPreview
        v-for="(item, i) in writing"
        :key="i"
        class="introduction"
        :file="item.file"
        folder="/writing"
      />
    </div>
  </article>
</template>

<script>
import Markdown from "~/components/Markdown.vue"
import MarkdownPreview from "~/components/Markdown-Preview.vue"
import ProjectList from "~/components/ProjectList.vue"

export default {
  data() {
    return {
      writing: [
        {
          file: require("./writing/content.md"),
        },
      ],
    }
  },
  components: {
    Markdown,
    MarkdownPreview,
    ProjectList,
  },
  mounted() {},
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

.introduction {
  max-width: 33rem;
}

.list {
  padding: 3rem;
}
</style>
