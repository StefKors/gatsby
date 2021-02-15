<template>
  <div :class="slugType" class="event-type label">
    {{ label }}
  </div>
</template>

<script>
import pluralize from "pluralize"

export default {
  props: ["word", "plural"],
  computed: {
    slugType() {
      return this.word
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "")
    },
    label() {
      if (this.plural) {
        return pluralize(this.word)
      }
      return this.word
    },
  },
}
</script>

<style lang="scss" scoped>
.label {
  border-radius: 4px;
  display: inline-block;
  padding: 0.2rem;
  font-size: 0.7rem;
}

.event-type {
  color: var(--color);
  background-color: var(--color-10);

  &.solo-show {
    color: var(--c1);
    background-color: var(--c1-10);
  }

  &.duo-show {
    color: var(--c2);
    background-color: var(--c2-10);
  }

  &.group-show {
    color: var(--c3);
    background-color: var(--c3-10);
  }

  &.talk {
    color: var(--c4);
    background-color: var(--c4-10);
  }

  &.artist-talk {
    color: var(--c5);
    background-color: var(--c5-10);
  }

  &.festival {
    color: var(--c6);
    background-color: var(--c6-10);
  }

  &.book {
    color: var(--c7);
    background-color: var(--c7-10);
  }

  &.installation {
    color: var(--accent);
    background-color: var(--accent-10);
  }
}

/* For the light theme we want to style slight different */
.light {
  .solo-show {
    color: var(--color);
    background-color: var(--c1);
  }

  .duo-show {
    color: var(--color);
    background-color: var(--c2);
  }

  .group-show {
    color: var(--color);
    background-color: var(--c3);
  }

  .talk {
    color: var(--color);
    background-color: var(--c4);
  }

  .artist-talk {
    color: var(--color);
    background-color: var(--c5);
  }

  .festival {
    color: var(--color);
    background-color: var(--c6);
  }

  .book {
    color: var(--color);
    background-color: var(--c7);
  }

  .installation {
    color: var(--color);
    background-color: var(--accent);
  }

  a:active,
  a:hover {
    color: var(--accent-10);
    outline-width: 0;
  }
}
</style>
