<template>
  <footer>{{ year }}</footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
footer {
  text-align: center;
  padding: 4rem 1rem;
  opacity: .5;
  font-size: .8rem;
}
</style>