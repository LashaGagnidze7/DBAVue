<template>
  <div>
    <button @click="mutateDeeply">{{ obj }}</button>
  </div>
</template>

<script>
import { nextTick } from "vue";
import { debounce } from "lodash-es";
const _ = require("lodash");

export default {
  data() {
    return {
      count: 0,
      obj: {
        nested: { count: 0 },
        arr: ["foo", "bar"],
      },
    };
  },
  methods: {
    increment() {
      this.count++;
      nextTick(() => {
        // access updated DOM
      });
    },
    increment1: () => {
      // BAD: no `this` access here!
    },
    mutateDeeply() {
      // these will work as expected
      this.obj.nested.count++;
      this.obj.arr.push("baz");
    },
    // Debouncing with Lodash
    click1: debounce(function () {
      // ... respond to click ...
    }, 500),
    click() {
      // ... respond to click ...
    },
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment();
  },
  created() {
    // each instance now has its own copy of debounced handler
    this.debouncedClick = _.debounce(this.click1, 500);
  },
  unmounted() {
    // also a good idea to cancel the timer
    // when the component is removed
    this.debouncedClick.cancel();
  },
};
</script>

<style></style>
