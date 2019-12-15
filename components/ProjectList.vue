<template>
  <div class="data">
    <div
      class="column"
      @click="toggle(i)"
      v-for="(item, i) in data"
      :key="item.Number"
    >
      <transition name="prev">
        <div v-if="open !== i" class="small">
          <div class="number">
            {{ item.Number + 1 }}
          </div>
          <div class="title">
            {{ item.Project }}
          </div>
        </div>
      </transition>

      <transition name="next">
        <div v-if="open === i" class="big">
          <div class="number">
            {{ item.Number + 1 }}
          </div>
          <div class="title">
            {{ item.Project }}
          </div>
          <div class="description">
            {{ item.Description }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  created() {},
  methods: {
    toggle: function(i) {
      this.open = i
    },
  },
}
</script>

<style>
.data {
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}

.column {
  border-left: 1px solid;
  display: inline-block;
  padding: 0 1rem;
  height: 80vh;
  cursor: pointer;
}

.column:last-of-type {
  border-right: 1px solid;
}

.column .small .title {
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s;
}

.column:hover .small .title {
  padding-top: 1rem;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s;
}

.small .number {
  text-align: center;
  min-width: 1.6rem;
}

.small .title {
  writing-mode: tb-rl;
}

.big {
  max-width: 700px;
  /* min-width: 300px; */
  width: 40vw;
}

.big .title,
.big .description {
  opacity: 1;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
}

.next-enter {
  width: 1rem;
}
.next-enter-to {
}
.next-enter-active,
.next-leave-active {
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.95s;
}

.next-enter-active .title,
.next-enter-active .description {
  opacity: 0;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
}

.next-leave {
  background-color: yellow;

}
.next-leave-to {
  background-color: purple;
  width: 1rem;
}


.prev-enter-active .description,
.prev-leave-active .description {
  opacity: 0;
}

</style>
