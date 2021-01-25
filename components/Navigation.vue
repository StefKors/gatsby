<template>
  <ul v-if="!isHomepage()" class="navigation">
    <li>
      <NuxtLink to="/">index</NuxtLink>
    </li>
    <li class="L1"><TreeItem /><NuxtLink to="/about">about</NuxtLink></li>
    <li class="L1"><TreeItem /><NuxtLink to="/about">about</NuxtLink></li>
    <li class="L1"><TreeItem /><NuxtLink to="/about">about</NuxtLink></li>
    <li class="L2" v-for="writing in articles" :key="writing.path">
      <TreeItem /><NuxtLink :to="writing.path">
        {{ writing.name }}
      </NuxtLink>
    </li>
    <li class="L1"><TreeItem /><NuxtLink to="/about">about</NuxtLink></li>
  </ul>
</template>

<script>
import TreeItem from "~/assets/Icons/TreeItem.svg?inline"

export default {
  components: { TreeItem },
  data() {
    return {
      articles: [],
    }
  },
  methods: {
    isHomepage() {
      return this.$route.path === "/"
    },
  },
  created() {
    console.log("routes", this.$router)

    this.$router.options.routes.forEach((route) => {
      if (route.path.includes("writing")) {
        this.articles.push({
          name: route.name,
          path: route.path,
        })
      }
    })
  },
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
}
</style>