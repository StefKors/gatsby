<template>
  <div class="data">
    <div class="options">
      <div class="group">
        <button
          class="button direction"
          v-for="(option, index) in sortOptions.direction"
          v-bind:class="{ active: sortSettings.direction === option.value }"
          :key="index"
          v-on:click="handleDirection(option)"
        >
          <div class="label">{{ option.label }}</div>
          <div class="circle"></div>

        </button>
      </div>
      <div class="group">
        <button
          class="button key"
          v-for="(option, index) in sortOptions.key"
          v-bind:class="{ active: sortSettings.key === option.value }"
          :key="index"
          v-on:click="handleKey(option)"
        >
          <div class="label">{{ option.label }}</div>
          <div class="circle"></div>
        </button>
      </div>
    </div>

    <div class="chapters">
      <div
        class="chapter"
        v-for="(compLetter, index) in compLetters"
        :key="index"
      >
        <div class="drop-cap">
          <div class="sticky">
            {{ compLetter }}
          </div>
        </div>
        <div class="projects">
          <div
            class="item"
            v-for="item in compChapters[compLetter]"
            :key="item.Number"
          >
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
      sortOptions: {
        direction: [
          {
            label: "Ascending",
            value: "asc",
          },
          {
            label: "Descending",
            value: "desc",
          },
        ],
        key: [
          {
            label: "Name",
            value: "Project",
            defaultSort: 'asc'
          },
          {
            label: "Year",
            value: "Date",
            defaultSort: 'desc'
          },
          {
            label: "Type",
            value: "Type",
            defaultSort: 'asc'
          },
        ],
      },
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
  methods: {
    handleDirection: function (option) {
      this.$store.commit('setSortDirection', option)
    },
    handleKey: function (option) {
      this.$store.commit('setSortKey', option)
    },
    formattedKey: function (item) {
      const { key } = this.sortSettings

      if (key === "Project") {
        return item[key].charAt(0).toLowerCase()
      }

      if (key === "Type") {
        return item[key].toLowerCase()
      }

      return item[key]
    },
  },
  computed: {
    compChapters: function () {
      const chapters = {}
      const { key } = this.sortSettings
      // For each of these letters
      // filter down the sorted projects
      // into chapers per letter
      this.compLetters.forEach((letter) => {
        const group = this.compSorted.filter((item) => {
          if (this.formattedKey(item) === letter) {
            return item
          }
        })

        chapters[letter] = {
          ...chapters[letter],
          ...group,
        }
      })

      return chapters
    },
    compLetters: function () {
      const { key } = this.sortSettings

      return _.union(
        this.compSorted.map((item) => {
          return this.formattedKey(item)
        })
      )
    },
    compSorted: function () {
      const { key, direction } = this.sortSettings

      return _.orderBy(this.data, [(item) => item[key]], [direction])
    },
    sortSettings() {
      return this.$store.state.sortSettings
    },
  },
}
</script>

<style scoped>

.item a {
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
}

.item a:active,
.item a:hover {
  outline-width: 0;
  color: var(--accent);
}

.chapters {
  margin-top: 4rem;
  columns: 26ch auto;
  column-gap: 1rem;
}

.item {
  break-inside: avoid-column;
  page-break-inside: avoid;
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
  text-transform: capitalize;
}

.description {
  opacity: 0.5;
}

.options {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.options .group {
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.button {
  all: unset;
  border: 1px solid transparent;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  display: inline-block;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
}


.button .circle,
.button .circle {
  background: transparent;
  width: .4rem;
  height: .4rem;
  border-radius: 100%;
  display: inline-block;
transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
}
.button:hover .circle,
.button.active .circle {
  background: var(--accent);
}

.button:hover .circle {
  background: var(--bg-light);
}

.button.active .circle {
  background: var(--accent);
}


@media screen and (max-width: 647px) {
  .chapter {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }

  .sticky {
    position: sticky;
    top: 1rem;
  }

  .options {
    flex-direction: column-reverse;
    gap: 1rem;
  }
}
</style>
