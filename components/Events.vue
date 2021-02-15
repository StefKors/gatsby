<template>
  <div class="data-wrapper">
    <div class="events-wrapper">
      <h1 class="title">Events, Presentations and Talks</h1>
      <p class="intro">
        Every once in a while it happens that my work gets viewed outside of the
        browser. Either at <InlineBadgeList :list="typeLabels" />. Below is a
        list which breaks down the events per year. If you want to know more
        about the project, clicking the name will navigate you to a larger
        description. So far <InlineYearList :list="dateCount" />.
      </p>
      <div class="dates" v-for="date in dateLabels" :key="date">
        <h2 class="title">
          {{ date }}
        </h2>

        <div class="events">
          <Event
            :event="event"
            :key="event.id"
            v-for="event in sortByDate[date]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from "lodash"
import events from "~/data/events.json"
export default {
  computed: {
    events() {
      return events
    },
    dateCount() {
      return _.countBy(events, (item) => {
        return item.date
      })
    },
    dateData() {
      return Object.values(this.dateCount)
    },
    dateLabels() {
      return Object.keys(this.sortByDate).reverse()
    },
    typeCount() {
      return _.countBy(events, (item) => {
        return item.type
      })
    },
    typeData() {
      return Object.values(this.typeCount)
    },
    typeLabels() {
      return Object.keys(this.typeCount)
    },
    sortByDate() {
      return _.groupBy(events, (item) => {
        return item.date
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-family: "Unna", sans-serif;
  font-weight: 700;
  font-style: normal;

  text-transform: none;
  text-decoration: none;
  letter-spacing: 0px;
}

h1.title {
  line-height: 1.2rem;
  font-size: 2rem;
}

h2.title {
  line-height: 1rem;
  font-size: 1.5rem;
}

.intro {
  max-width: 50ch;
}

.count {
  font-size: 0.8rem;
  font-weight: normal;
}

.dates {
  margin-top: 4rem;
}

.events-wrapper {
  display: flex;
  flex-direction: column;

  .events {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    max-width: 1800px;

    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;

    }

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr 1fr;

    }

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;

    }
  }
}
</style>
