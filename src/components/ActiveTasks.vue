<template>
  <div>
    <h3>Active Tasks</h3>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" @click="this.$emit('toCompleted', task.id)" :checked="task.completed"/>
        {{ task.name }}
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
