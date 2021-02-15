<template>
  <span v-frag>
    <span class="part" v-for="(part, index) in listParts" :key="index">
      <Badge v-if="part.type === 'element'" :word="part.value" :plural="true" />
      <Literal v-else :word="part.value" />
    </span>
  </span>
</template>

<script>
import * as _ from "lodash"
import frag from "vue-frag"

export default {
  directives: {
    frag,
  },
  props: ["list"],
  computed: {
    listParts() {
      if (!("ListFormat" in Intl)) {
        return this.list.join(", ")
      }

      const formatter = new Intl.ListFormat("en", {
        style: "long",
        type: "conjunction",
      })

      return formatter.formatToParts(this.list)
    },
  },
}
</script>

<style lang="scss" scoped>
span,
.inline-badge-list {
  display: inline;
  white-space: nowrap;
  word-break: break-all;
  overflow-wrap: break-word;
}
</style>
