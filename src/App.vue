<template>

</template>  

<script>
export default {
  data() {
    return {

    };
  },
  beforeCreate() {
    console.log(`component is not created yet`);
  },
  created() {
    console.log(`component created`);
  },
  beforeMount() {
    console.log(`component is not mounted yet`);
  },
  mounted() {
    console.log(`componet mounted`)
  },
  beforeUpdate() {
    console.log(`component is not updated yet`)
  },
  updated() {
    console.log(`component updated`);
  },
  beforeUnmount() {
    console.log(`component is not mounted yet`);
  },
  mounted() {
    console.log(`component mounted`);
  }
};
</script>

<style>

</style>
