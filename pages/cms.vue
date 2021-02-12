<template>
  <article>
    <h1>My CMS</h1>
    <div class="cms-wrapper">
      <FormulateForm
        v-model="formValues"
        :values="formValues"
        @submit="handleSubmit"
      >
        <FormulateInput
          name="project"
          label="What project?"
          :options="projects"
          type="select"
          validation="required"
        />
        <FormulateInput name="name" label="Event" />
        <FormulateInput name="location" label="Location" />
        <FormulateInput
          name="type"
          :options="options.type"
          type="select"
          placeholder="Select a type"
          label="Type"
        />
        <FormulateInput
          name="date"
          :options="options.date"
          type="select"
          placeholder="Select a year"
          label="Year"
          :value="currentYear"
        />

        <FormulateInput type="submit" label="Add" />
      </FormulateForm>
      <div class="store-data">
        <FormulateInput @click="handleClear" type="submit" label="Clear" />
        <Event :event="item" :key="item.id" v-for="item in cmsData" />
      </div>
    </div>
  </article>
</template>

<script>
import db from "~/data/db.json"
import resume from "~/data/resume.json"
import * as _ from "lodash"
export default {
  data() {
    return {
      formValues: {
        date: 2020,
      },
      options: {
        type: [
          "Talk",
          "Book",
          "Solo Show",
          "Duo Show",
          "Group Show",
          "Festival",
          "Artist Talk",
          "Book Fair",
          "Installation"
        ],
        date: {
          2021: "2021",
          2020: "2020",
          2019: "2019",
          2018: "2018",
          2017: "2017",
          2016: "2016",
          2015: "2015",
          2014: "2014",
          2013: "2013",
          2012: "2012",
        },
      },
    }
  },
  methods: {
    handleSubmit(data) {
      this.$store.commit("addCMSdata", data)
      // this.formValues = {}
    },
    handleClear(data) {
      this.$store.commit("clearCMSdata")
    },
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
    projects() {
      const resumeArray = resume.map((item, index) => {
        return  {
          value: 'job-' + item.id,
          label: item.company,
        }
      })

      const dbArray = db.map((item) => {
        return {
          value: 'project-' + item.id,
          label: item.name,
        }
      })

      const allWork = dbArray.concat(resumeArray)

      return _.sortBy(allWork, "label")
    },
    cmsData() {
      return this.$store.state.cms
    },
  },
}
</script>

<style lang="scss">
@import "../node_modules/@braid/vue-formulate/themes/snow/snow.scss";

input,
select {
  color: var(--color);
}

.cms-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  .store-data {
  display: grid;
  grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
</style>
