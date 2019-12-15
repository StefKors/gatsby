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
    const markdown = this.file
    this.contents = markdown.vue.component
  },
}
</script>
