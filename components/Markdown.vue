<template>
  <component :is="this.contents" />
</template>

<script>
export default {
  data() {
    return {
      contents: null,
    }
  },
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log('file', this.file)
    const markdown = this.file
    this.contents = markdown.vue.component
  },
}
</script>
