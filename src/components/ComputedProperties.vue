<template>
  <div>
    <p>Has published books:</p>
    <span>{{ calculateBooksMessage1() }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      firstName: "John",
      lastName: "Doe",
    };
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? "Yes" : "No";
    },
    now() {
      return Date.now(); // is not reactive dependency
    },
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
  },
  methods: {
    calculateBooksMessage1() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
};
</script>

<style></style>
