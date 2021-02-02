<template>
  <button class="UItoggle" v-on:click="toggle()">
    <Dark v-if="UIMode === 'dark'" class="icon" />
    <Light v-else class="icon" />
  </button>
</template>

<script>
import Dark from "~/assets/Icons/Dark.svg?inline"
import Light from "~/assets/Icons/Light.svg?inline"

export default {
  components: { Dark, Light },
  head() {
    return {
      htmlAttrs: {
        class: this.$store.state.UIMode,
      },
    }
  },
  methods: {
    toggle() {
      this.$store.commit("toggleUIMode")
    },
  },
  computed: {
    UIMode() {
      return this.$store.state.UIMode
    },
  },
}
</script>

<style lang="scss">
.UItoggle {
  all: unset;
  padding: 1rem;
  background: var(--bg);
  color: var(--color);
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border-radius: 100%;
  line-height: 15px;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
  transition-property: background-color, color;
}

.UItoggle:hover {
  background: var(--accent);
  color: var(--bg);
}
</style>