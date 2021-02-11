<template>
  <div v-if="event" class="event">
    <div class="labels">
      <div class="event-date">{{ event.date }}</div>
      <div class="event-type">{{ event.type }}</div>
    </div>
    <div>
      <NuxtLink :to="'/#project-' + project.id">
        {{ project.name }} <UpRight />
      </NuxtLink>
    </div>
    <div>
      <span class="event-name">{{ event.name }}</span>
      <span>{{ event.location }}</span>
    </div>
  </div>
</template>

<script>
import UpRight from "~/assets/Icons/Arrow/Up-Right.svg?inline"
import * as _ from "lodash"
import db from "~/data/db.json"

export default {
  props: ["event"],
  components: { UpRight },
  computed: {
    project() {
      return _.find(db, (object) => {
        return object.id == parseInt(this.event.project)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.event {
  scroll-margin-top: 10vh;

  .event-date {
    border: 1px solid var(--accent);
    color: var(--accent);
    border-radius: 4px;
    display: inline-block;
    padding: 0.2rem;
    font-size: 0.7rem;
  }

  .event-name {
    font-style: italic;
  }

  .event-type {
    border: 1px solid;
    border-radius: 4px;
    display: inline-block;
    padding: 0.2rem;
    font-size: 0.7rem;
  }

  .labels {
    margin-bottom: 0.5rem;
  }
}
</style>