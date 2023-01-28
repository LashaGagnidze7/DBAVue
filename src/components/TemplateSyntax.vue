<template>
  <span>Message: {{ msg }}</span>

  <div v-bind:id="dynamicId"></div>
  <div :id="dynamicId"></div>

  <button :disabled="isButtonDisabled">Button</button>

  <div v-bind="objectOfAttrs"></div>

  {{ number + 1 }}
  {{ ok ? "YES" : "NO" }}
  {{ message.split("").reverse().join("") }}
  <div :id="`list-${id}`"></div>

  <span :title="toTitleDate(date)">
    {{ formatDate(date) }}
  </span>

  <p v-if="seen">Now you see me</p>

  <a v-bind:href="url"> ... </a>
  <a :href="url"> ... </a><br />

  <a v-on:click="doSomething"> ... </a>
  <a @click="doSomething"> ... </a><br />

  <a v-bind:[attributeName]="url"> ... </a>
  <a :[attributeName]="url"> ... </a> <br />

  <a v-on:[eventName]="doSomething"> ... </a>
  <a @[eventName]="doSomething"> ... </a>

  <form @submit.prevent="onSubmit"> ... </form> <!-- Modifiers -->
</template>

<script>
export default {
  data() {
    return {
      msg: "Temp", // Text Interpolation

      dynamicId: 0, // Attribute Bindings, Shorthand

      isButtonDisable: false, // Boolean Attributes

      objectOfAttrs: {
        // Dynamically Binding Multiple Attributes
        id: "container",
        class: "wrapper",
      },

      number: 0, // Using JavaScript Expressions
      ok: false,
      message: "Temp",
      id: 0,

      date: "01.01.2023",

      seen: true, //Directives and Arguments
      url: "https://vuejs.org",

      attributeName: "href", // Dynamic Arguments. null can be used to remove binding
      eventName: "click",


    };
  },
  methods: {
    toTitleDate(date) {
      // Calling Functions
      return date.split(/\./).join(":");
    },
    formatDate(date) {
      return date.replace(/\./g, ":");
    },
    doSomething() {
      console.log("I did something!");
    },
  },
};
</script>

<style></style>
