<template>
  <div class="data">
    <div class="item" v-for="item in data" :key="item.Number">
      <a
        v-if="item.Url"
        :href="item.Url"
        target="_blank"
        rel="noopener noreferrer"
        class="title"
      >
        <div class="label">{{ item.Project }}</div>
        <div class="meta">
          <div>{{item.Type}}</div>
          <div>{{item.Tech}}</div>
          <div>{{item.Date}}</div>
        </div>
        <div class="description">
          {{ item.Description }}
        </div>
      </a>

      <span v-else class="title">
        <div class="label">{{ item.Project }}</div>
                <div class="meta">
          <div>{{item.Type}}</div>
          <div>{{item.Tech}}</div>
          <div>{{item.Date}}</div>
        </div>
        <div class="description">
          {{ item.Description }}
        </div>
      </span>
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
    enter: function (i) {
      this.paused = true
    },
    leave: function (i) {
      this.paused = false
    },
  },
}
</script>

<style scoped>
.data {
  position: relative;
  padding: 1rem 0;
}

.item {
  /* max-width: 55ch; */
}

.item + .item {
  margin-top: 2rem;
}

.item .title {
  text-decoration: none;
  border: none;
  gap: 0rem;
  align-items: top;
  display: grid;
  grid-template-columns: 25% 25% 50%;
}

.circle {
  border-radius: 1rem;
  height: .5rem;
  width: 0.5rem;
  opacity: 0.2;
}

.description {
  max-width: 55ch;
}

.item:hover .circle {
  opacity: 1;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
  grid-area: a / a / a / c;
}

a > .circle {
  background: var(--accent);
}

span > .circle {
  background: var(--bg-light);
}

.link {
  border-bottom: none;
  border-radius: 100px;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
  display: inline-block;
}

/* transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s; */
</style>
