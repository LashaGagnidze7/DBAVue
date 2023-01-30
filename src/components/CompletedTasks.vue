<template>
  <div>
    <h3>Completed Tasks</h3>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" @click="this.$emit('toActives', task.id)" :checked="task.completed"/>
        {{ task.name }}
        <p @click="this.$emit('delete', task.id)" style="color: red; cursor: pointer;"> x</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
};
</script>

<style scoped>
p {
  display: inline;
}
</style>