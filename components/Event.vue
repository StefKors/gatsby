<template>
  <div v-if="event" class="event" :class="slugType">
    <div class="labels">
      <div class="event-date label">{{ event.date }}</div>
      <div class="event-type label">
        {{ event.type }}
      </div>
    </div>
    <div>
      <NuxtLink v-if="project" :to="'/#' + project.id">
        {{ project.name }} <UpRight />
      </NuxtLink>
    </div>
    <div>
      <div class="event-name">{{ event.name }}</div>
      <div>{{ event.location }}</div>
    </div>
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

  .labels {
    .label {
      color: var(--color);
      background-color: var(--color-10);
      border-radius: 4px;
      display: inline-block;
      padding: 0.2rem;
      font-size: 0.7rem;
    }

    .event-type {
      color: var(--accent);
      background-color: var(--accent-10);
    }
  }

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

  .labels {
    margin-bottom: 0.5rem;
  }
}

.solo-show {
  --accent: var(--c1);
  --accent-10: var(--c1-10);
}

.duo-show {
  --accent: var(--c2);
  --accent-10: var(--c2-10);
}

.group-show {
  --accent: var(--c3);
  --accent-10: var(--c3-10);
}

.talk {
  --accent: var(--c4);
  --accent-10: var(--c4-10);
}

.artist-talk {
  --accent: var(--c5);
  --accent-10: var(--c5-10);
}

.festival {
  --accent: var(--c6);
  --accent-10: var(--c6-10);
}

.book {
  --accent: var(--c7);
  --accent-10: var(--c7-10);
}

.installation {
  
}

/* For the light theme we want to style slight different */
.light {
  .solo-show {
    --accent: var(--color);
    --accent-10: var(--c1);
  }

  .duo-show {
    --accent: var(--color);
    --accent-10: var(--c2);
  }

  .group-show {
    --accent: var(--color);
    --accent-10: var(--c3);
  }

  .talk {
    --accent: var(--color);
    --accent-10: var(--c4);
  }

  .artist-talk {
    --accent: var(--color);
    --accent-10: var(--c5);
  }

  .festival {
    --accent: var(--color);
    --accent-10: var(--c6);
  }

  .book {
    --accent: var(--color);
    --accent-10: var(--c7);
  }

  a:active,
  a:hover {
    color: var(--accent-10);
    outline-width: 0;
  }
}
</style>
