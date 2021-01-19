<template>
  <div class="data">
    <div class="chapter" v-for="(letter, index) in letters" :key="index">
      <div class="drop-cap">
        {{ letter }}
      </div>
      <div class="projects">
        <div class="item" v-for="item in chapters[letter]" :key="item.Number">
          <a
            v-if="item.Url"
            :href="item.Url"
            target="_blank"
            rel="noopener noreferrer"
            class="title"
          >
            <div class="label">{{ item.Project }}</div>
            <div class="description">{{ item.Description }}</div>
          </a>

          <span v-else class="title">
            <div class="label">{{ item.Project }}</div>
            <div class="description">{{ item.Description }}</div>
          </span>
        </div>
      </div>
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
      letters: [],
      chapters: {},
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
    // https://torinodesign.info/
    this.sorted = _.orderBy(this.data, [(item) => item.Project], ["asc"])

    // Create array of unique letters
    this.letters = _.union(
      this.sorted.map((item) => {
        return item.Project.charAt(0).toLowerCase()
      })
    )

    // For each of these letters
    // filter down the sorted projects
    // into chapers per letter
    this.letters.forEach((letter) => {
      const group = this.sorted.filter((item) => {
        if (item.Project.charAt(0).toLowerCase() === letter) {
          return item
        }
      })

      this.chapters[letter] = {
        ...this.chapters[letter],
        ...group
      }
    })
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

.data {
  columns: 26ch auto;
column-gap: 1rem;
}

.chapter {
}

.drop-cap {
  font-family: "Unna", sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 1.2em;
  font-size: 2rem;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 0px;
  text-transform: uppercase;
}

.label {

}

.description {
  opacity: .5;
}
</style>
