<script setup>
import { useStore } from "vuex";
const store = useStore();

const changeSearch = (e) =>
  store.commit("youtube/changeSearch", e.target.value);
</script>

<template>
  <input type="text" @input="changeSearch" placeholder="Seach" />
</template>
