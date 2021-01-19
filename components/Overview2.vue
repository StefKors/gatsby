<template>
  <div class="data">
    <div class="item" v-for="item in sorted" :key="item.Number">
      <a
        v-if="item.Url"
        :href="item.Url"
        target="_blank"
        rel="noopener noreferrer"
        class="title"
      >
        <div class="label">{{ item.Project }}</div>
      </a>

      <span v-else class="title">
        <div class="label">{{ item.Project }}</div>
      </span>
    </div>
  </div>
</template>

<script>
import Label from "~/components/Label.vue"
import _ from "lodash"

export default {
  data() {
    return {
      paused: false,
      sorted: [],
    }
  },
  components: {
    Label,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log(this.data)
    // https://torinodesign.info/
    this.sorted = _.orderBy(this.data, [(item) => item.Project], ["asc"])
  },
  methods: {
    enter: function (i) {
      this.paused = true
    },
  },
}
</script>

<style scoped>
/* transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s; */
</style>
