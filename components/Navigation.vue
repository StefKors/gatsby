<template>
  <ul v-if="!isHomepage()" class="navigation">
    <li><NuxtLink to="/">index</NuxtLink></li>
    <li :class="route.level" v-for="route in articles" :key="route.path">
      <NuxtLink :to="route.path">
        <TreeItem class="tree" />
        {{ unslugify(route.title) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import TreeItem from "~/assets/Icons/TreeItem.svg?inline"

const omitName = [ "colofon", "artist-websites", "cms", "dev" ]
const omitPath = [ "/" ]

export default {
  components: { TreeItem },
  methods: {
    isHomepage() {
      return this.$route.path === "/"
    },
    unslugify(slug) {
      const result = slug.replace(/\-/g, " ");
      return result.replace(/\w\S*/g, function (txt) {
        return txt
      });
    }
  },
  computed: {
    articles() {
      return this.$router.options.routes.filter(route => {
        // Omit any path included in omitPath array
        // Precise match
        if (omitPath.includes(route.path)) {
          return false 
        }

        // Omit any name included in omitName array
        // Fuzzy match
        if (omitName.some(str => route.path.includes(str)) ) {
          return false
        }

        return true
      }).map(route => {
        // split array on "/"
        // filter empty strings
        const routePathArray = route.path.split('/').filter(Boolean)
        // get the length of the array
        const level = routePathArray.length
        // set the level to the string "L1" (or "L2", "L3", ect)
        route.level = `L${level}`
        // create custom route by taking the page name without the folder name
        route.title = routePathArray.pop()
        // return the modified object
        return route
      })

    }
  }
}
</script>

<style lang="scss">
.navigation {
  display: flex;
  flex-direction: column;
  

  li {
    all: unset;
  }

  .L1 {
    padding-left: 1rem;
  }

  .L2 {
    padding-left: 2rem;
  }

  .nuxt-link-exact-active .tree {
    opacity: 1;
  }

  .tree {
    opacity: .5;
  }
}
</style>