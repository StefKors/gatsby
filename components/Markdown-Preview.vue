<template>
  <nuxt-link :to="url">
    <div v-if="title" class="title">{{title}}</div>
    <div v-if="date" class="date">{{date}}</div>
  </nuxt-link>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      date: null,
    }
  },
  props: {
    file: {
      required: true,
    },
    folder: {
      type: String,
      required: false,
    },
  },
  created() {
    const markdown = this.file

    this.title = markdown.attributes.title
    this.date = markdown.attributes.date

    this.url = `${this.folder}/${markdown.attributes.title
      .replace(/\W+/g, "-")
      .toLowerCase()}`
  },
}
</script>
