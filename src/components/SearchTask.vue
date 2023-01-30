<template>
  <div>
    <div>
      <input v-model="name" placeholder="Search" />
    </div>
    <div>
      <h3 v-show="name">Search result</h3>
      <ul>
        <li v-for="task in search()" :key="task.id">
          {{ task.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  data() {
    return {
      name: null,
    };
  },
  methods: {
    search() {
      if (this.name) {
        return this.tasks.filter((task) => task.name.match(this.name));
      }
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  margin: 10px;
  font-size: x-large;
  border: 1px solid black;
  border-radius: 5px;
}
</style>