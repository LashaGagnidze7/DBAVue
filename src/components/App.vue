<script setup>
import Search from "./Search.vue";
</script>

<template>
  <search></search>
  <div class="flex flex-row space-x-4">
    <router-link to="/">Youtube</router-link> |
    <router-link to="/watchlist">Watchlist</router-link> |
    <router-link to="/add-video">Add Video</router-link>
  </div>
  <router-view/>
</template>
