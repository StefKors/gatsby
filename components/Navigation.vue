<template>
  <ul v-if="!isHomepage()" class="navigation">
    <li><NuxtLink to="/">index</NuxtLink></li>
    <li class="L1" v-for="page in articles" :key="page.path">
      <NuxtLink :to="page.path">
        <TreeItem class="tree" />
        {{ unslugify(page.name) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import TreeItem from "~/assets/Icons/TreeItem.svg?inline"

export default {
  components: { TreeItem },
  data() {
    return {
      // articles: [],
    }
  },
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
        if(route.path === "/") {
          return false 
        }

        return true
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