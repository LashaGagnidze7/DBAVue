<template>
  <ul>
    <li v-for="item in list" ref="items" :key="item">
      {{ item }}
    </li>
  </ul>
  <ChildComponent ref="child" />
  <input :ref="(el) => { /* assign el to a property or ref */ }">
</template>  

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  data() {
    return {
      list: [
        1, 2, 3, 4, 5, 6, 7
      ],
    };
  },
  mounted() {
    console.log(this.$refs.items);
    // this.$refs.child will hold an instance of <Child />
  },
  components: {
    ChildComponent
  }
};
</script>

<style>

</style>
