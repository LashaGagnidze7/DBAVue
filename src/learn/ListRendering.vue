<template>
  <div>
    <li v-for="(item, index) in items" :key="index">
      // of can also be used {{ parentMessage }} - {{ index }} -
      {{ item.message }}
    </li>

    <ul>
      <li v-for="(value, key, index) in myObject" :key="index">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>

    <span v-for="n in 10" :key="n">{{ n }}</span>

    <ul>
      <template v-for="(item, index) in items" :key="index">
        <li>{{ item.message }}</li>
        <li class="divider" role="presentation"></li>
      </template>
    </ul>

    <template v-for="todo in todos" :key="todo.name">
      <li v-if="!todo.isCompleted">
        {{ todo.name }}
      </li>
    </template>

    <div v-for="item in items" :key="item.id">
      <!--content-->
    </div>

    <template v-for="todo in todos" :key="todo.name">
      <li>{{ todo.name }}</li>
    </template>

    <MyComponent v-for="item in items" :key="item.id" />

    <MyComponent
      v-for="(item, index) in items"
      :item="item"
      :index="index"
      :key="item.id"
    />

    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>

    <ul v-for="numbers in sets" :key="numbers.length">
      // not unique key, just for error handling
      <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
import MyComponent from "./MyComponent.vue";

export default {
  data() {
    return {
      parentMessage: "Parent",
      items: [
        { message: "Foo", id: 1 },
        { message: "Bar", id: 2 },
      ],
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      todo: [
        {
          name: "task1",
          isComplete: false,
        },
        {
          name: "task2",
          isComplete: false,
        },
        {
          name: "task3",
          isComplete: false,
        },
      ],
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  components: { MyComponent },
  computed: {
    evenNumbers() {
      return this.numbers.filter((n) => n % 2 === 0);
    },
    reversedNumbers() {
      return [...this.numbers].reverse;
    },
  },
  methods: {
    even(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    },
    reverse1(numbers) {
      return [...numbers].reverse();
    },
  },
};
</script>

<style scoped></style>
