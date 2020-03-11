<template>
  <div class="data">
    <div target="_blank" class="item" v-for="item in data" :key="item.Number">
      <div class="description">
        <p class="title">
          <a
            v-if="item.Url"
            :href="item.Url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.Project }}
          </a>

          <span v-if="!item.Url">{{ item.Project }}</span>
          <span>{{ item.Type }}</span>
        </p>
        <p>
          {{ item.Description }}
        </p>
        <p class="footer">
          <span v-if="item.Collaborators"
          class="collaborators"
            >Worked with: {{ item.Collaborators }}</span
          >
          <span
            class="date"
            :style="{
              backgroundColor: `hsla(${~~(360 * Math.random())},70%,70%,0.8)`,
              transform: `rotate(${~~(40 * Math.random())}deg)`,
            }"
          >
            {{ item.Date }}
          </span>
        </p>
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
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 600px) {
  .data {
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 1480px) {
  .data {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.item {
  max-width: 55ch;
  margin: 1rem;
  padding: 1rem;
}


@media screen and (max-width: 600px) {
  .item {
    padding: 0;
    margin: 0;
  }
}


.item a {
  text-decoration: none;
  border: none;
  color: #0000ee;
}

.item a:visited {
  color: #551a8b;
}

.description {
}

.title {
  border-bottom: 1px solid;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.link {
  border-bottom: none;
  border-radius: 100px;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
  display: inline-block;
}

.footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.date {
  border-radius: 100%;
  height: 6ch;
  width: 6ch;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}

.collaborators {
  max-width: 70%;
}
/* transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s; */
</style>
