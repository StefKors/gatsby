<template>
  <div :class="['markdown', title && 'parsed-title']">
    <h1 v-if="title">{{ title }}</h1>
    <div class="attributes" v-for="(value, key) in attributes" :key="key">
      <span class="key">{{ key }}:</span>
      <span class="value">{{ value }}</span>
    </div>
    <component class="content" :is="this.content" />
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  computed: {
    content() {
      return this.file.vue.component
    },
    attributes() {
      return this.file.attributes
    },
    title() {
      // Set title from attributes
      if (this.attributes.title) {
        return this.attributes.title
      }
      // if not title set, parse title from content
      // Split the raw body into it's lines
      const lines = this.file.body.split("\n")
      const title = lines.find((line) => {
        // Find the first line that starts with '#'
        if (line.startsWith("# ")) {
          // return true
          return true
        }
      })

      // if we found a title
      if (title) {
        // Set the title without the markdown heading markup
        return title.replace("#", "")
      }

      // if nothing at all set title to null
      return null
    },
  },
}
</script>

<style lang="scss">
.markdown.parsed-title .content h1:first-of-type {
  display: none;
}

.attributes {
  margin-bottom: 4rem;
  
  .key {
    opacity: 0.5;
    text-transform: capitalize;
  }
}
</style>
