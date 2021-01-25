<template>
  <div class="wrapper">
    <div class="border white"></div>
    <!-- <div class="border blue"></div> -->
  </div>
</template>

<script>
export default {
  mounted() {},
}
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  margin: 4rem 0;
  position: relative;
}

.border {
  background: var(--color);
  height: 1px;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;

}

.border.white {
  width: 100%;

}

.border.blue {
  width: 0%;
    animation-name: slidein;
  animation-duration: 1500ms;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
    position: absolute;
  top: 0;
}

@keyframes slidein {
  from {
    width: 0%;
  background: var(--color);
  }
  to {
    width: 100%;
    background: var(--accent);
  }
}
</style>