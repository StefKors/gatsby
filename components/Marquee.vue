<template>
  <div @mouseenter="this.enter" @mouseleave="this.leave">
    <MarqueeText :paused="paused" :duration="180" class="data">
      <span
        target="_blank"
        class="title"
        v-for="(item) in data"
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
  max-width: 100vw;
  position: relative;
  overflow: hidden;
}

.data::before {
  content: "";
  background: linear-gradient(90deg, rgba(255,239,213,1) 0%, rgba(255,239,213,0) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 4ch;
  height: 5rem;
  z-index: 99;
}

.data::after {
  content: "";
  background: linear-gradient(-90deg, rgba(255,239,213,1) 0%, rgba(255,239,213,0) 100%);
  position: absolute;
  top: 0;
  right: 0;
  width: 4ch;
  height: 5rem;
  z-index: 99;
}

.title {
  font-size: 2rem;
  padding: .5rem;
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
