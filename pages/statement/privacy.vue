<template>
  <article class="container">
    <div class="header" align="center">
      <h2 align="center">Privacy Policy</h2>
      <p>
        Statement does not collect or store any private information.
      </p>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header p {
  max-width: 60ch;
  orphans: 3;
}
/* cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s; */
.appicon {
  width: 128px;
  height: 128px;
}

.os-support {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-content: center;
  justify-content: center;
}

.screenshot {
  padding-top: 1rem;
    display: flex;
  flex-direction: row;
  gap: 1rem;
  align-content: center;
  justify-content: center;

  img {
    max-width: 1200px;
  }
}
</style>