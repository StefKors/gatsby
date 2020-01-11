<template>
  <div @mouseenter="this.enter" @mouseleave="this.leave">
    <MarqueeText :paused="paused" :duration="180" class="data">
      <span
        target="_blank"
        class="title"
        v-for="(item, i) in data"
        :key="item.Number"
      >
        <a
        class="link"
          v-if="Boolean(item.Url)"
          :href="item.Url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Label :data="item" />
        </a>
        <Label v-if="!Boolean(item.Url)" :data="item" />
      </span>
    </MarqueeText>
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component"
import Label from "~/components/Label.vue"

export default {
  data() {
    return {
      paused: false,
    }
  },
  components: {
    MarqueeText,
    Label,
  },
  props: {
    data: {
      type: Object,
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
  margin: 0 -4rem;
}

.title {
  font-size: 2rem;
  display: inline-block;
  font-weight: bolder;
}

.link {
  border-bottom: none;
  background: #ebe9e9;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin: 0.6rem;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
}

.link:hover {
  background: #dddbdb;
  cursor: pointer;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
}

/* transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s; */
</style>
