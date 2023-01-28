<template>
  <div>
    <h1 v-if="awesome"></h1>

    <button @click="awesome = !awesome">Toggle</button>
    <h1 v-if="awesome">Vue is awesome</h1>
    <h1 v-else>Oh no</h1>

    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>

    <div v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>

    <h1 v-show="ok">Hello!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: true,
      type: "C",
      ok: true,
    };
  },
};

// Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs.
</script>

<style></style>
