<template>
  <span v-frag>
    <span v-for="part in listParts" :key="part.value">
      <Badge v-if="part.type === 'element'" :word="part.value" />
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
      const list = _.map(this.list, (count, year) => {
        return `${year} had ${count} events`
      })
      console.log("list", list)
      if (!("ListFormat" in Intl)) {
        return list.join(", ")
      }

      const formatter = new Intl.ListFormat("en", {
        style: "long",
        type: "conjunction",
      })

      return formatter.formatToParts(list)
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
