<template>
  <div class="wrapper">
    <div v-for="job in data" :key="job.date">
      <a :href="job.url" target="_blank" rel="noopener noreferrer" class="job">
        <div class="company">{{ job.company }}</div>
        <div class="title">{{ job.title }}</div>
        <div class="date">{{ job.date }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
}

.company,
.title,
.date {
  display: inline;
}

.title,
.date {
  margin-left: 0.5rem;
}

.title {
  color: var(--bg-light);
}

.date {
  display: inline;
  opacity: 0;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s;
}

.job:hover .date {
  color: var(--bg-light);
  opacity: 1;
}

@media screen and (max-width: 800px) {
  .date {
    display: none;
  }
}
</style>
