<template>
  <div>
    <form>
      <input v-model="name" placeholder="Task" />
      <button @click.prevent="add">Add Task</button>
      <h4 v-show="flag">Please enter name!</h4>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      flag: false,
      id: 0,
    };
  },
  methods: {
    add() {
      if (this.name) {
        this.$emit("id-name", {
          id: ++this.id,
          name: this.name,
          completed: false,
        });
        this.name = null;
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
  },
};
</script>
