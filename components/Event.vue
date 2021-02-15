<template>
  <div v-if="event" class="event">
    <div class="labels">
      <Badge :word="event.type" />
    </div>
    <NuxtLink v-if="project" :to="'/#' + event.project">
      {{ project.name }} <UpRight />
    </NuxtLink>
    <div class="event-name">{{ event.name }}</div>
    <div class="event-location">{{ event.location }}</div>
  </div>
</template>

<script>
import UpRight from "~/assets/Icons/Arrow/Up-Right.svg?inline"
import * as _ from "lodash"
import db from "~/data/db.json"
import resume from "~/data/resume.json"

export default {
  props: ["event"],
  components: { UpRight },
  computed: {
    project() {
      // If it's a project return the project
      if (this.event.project.includes("project")) {
        return _.find(db, (object) => {
          return "project-" + object.id == this.event.project
        })
      }

      // If it's a job
      if (this.event.project.includes("job")) {
        // find the job
        const job = _.find(resume, (object) => {
          if ("job-" + object.id == this.event.project) {
            return true
          }
        })

        // give it a proper name and return
        return {
          ...job,
          name: job.company,
        }
      }

      return null
    },
    slugType() {
      return this.event.type
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "")
    },
  },
}
</script>

<style lang="scss" scoped>
.event {
  scroll-margin-top: 10vh;
  flex: 0 0 25ch;
  display: block;

  a {
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;

    &:active,
    &:hover {
      outline-width: 0;
      color: var(--accent);
    }
  }

  .event-name {
    font-style: italic;
  }

  .event-date {
    color: var(--accent);
  }

  .event-location {
    color: var(--color-50);
  }

  .labels {
    margin-bottom: 0.5rem;
  }
}
.light {
  a:active,
  a:hover {
    color: var(--accent-10);
    outline-width: 0;
  }
}
</style>
