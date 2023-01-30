<template>
  <Header :header="header"></Header>
  <AddTask @id-name="(task) => add(task)"></AddTask>
  <SearchTask :tasks="tasks" ></SearchTask>
  <ActiveTasks
    @toCompleted="(id) => activeToCompleted(id)"
    :tasks="tasks"
  ></ActiveTasks>
  <CompletedTasks
    @toActives="(id) => completedToActives(id)"
    @delete="(id) => completedToDeleted(id)"
    :tasks="completed"
  ></CompletedTasks>
</template>

<script>
import Header from "./components/AppHeader.vue";
import AddTask from "./components/AddTask.vue";
import SearchTask from "./components/SearchTask.vue";
import ActiveTasks from "./components/ActiveTasks.vue";
import CompletedTasks from "./components/CompletedTasks.vue";

export default {
  components: {
    Header,
    AddTask,
    SearchTask,
    ActiveTasks,
    CompletedTasks,
  },
  data() {
    return {
      header: "CMC To Do",
      tasks: [],
      completed: [],
    };
  },
  methods: {
    add(task) {
      this.tasks.push(task);
    },
    activeToCompleted(id) {
      const task = this.tasks.find((task) => task.id === id);
      this.tasks.splice(this.tasks.indexOf(task), 1);
      task.completed = true;
      this.completed.push(task);
    },
    completedToActives(id) {
      const task = this.completed.find((task) => task.id === id);
      this.completed.splice(this.completed.indexOf(task), 1);
      task.completed = false;
      this.tasks.push(task);
    },
    completedToDeleted(id) {
      this.completed = this.completed.filter((task) => task.id !== id);
    },
  },
};
</script>

<style>
#app {
  margin: auto;
  width: 25%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: x-large;
}
ul {
  list-style-type: none;
}
li {
  display: block;
}
</style>