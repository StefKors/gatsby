<template>
  <div class="data">
    <div
      target="_blank"
      class="item"
      v-for="(item, index) in data"
      :key="item.Number"
    >
      {{ index + 1 }}
      {{ item.Type }}

      <div class="description">
        <p>
          {{ item.Description }}
        </p>
        <div class="link">Check it out now</div>
      </div>
    </div>
  </div>
</template>

<script>
import Label from "~/components/Label.vue"

export default {
  data() {
    return {
      paused: false,
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
  created() {},
  methods: {
    enter: function(i) {
      this.paused = true
    },
    leave: function(i) {
      this.paused = false
    },
  },
}
</script>

<style scoped>
.data {
  max-width: 130%;
  position: relative;
}

.item {
  width: 20rem;
  margin: 1rem;
}

.description {
  max-width: 55ch;
  padding-left: 3rem;
}

.title {
  display: flex;
  text-align: center;
}

.link {
  border-bottom: none;
  border-radius: 100px;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
  display: inline-block;
}
/* transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s; */
</style>
