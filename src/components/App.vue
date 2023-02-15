<template>
  <Search></Search>
  <div class="flex flex-row space-x-4">
    <router-link to="/" class="text-blue-500 hover:text-blue-800"
      >Youtube</router-link
    >
    <router-link to="/watchlist" class="text-blue-500 hover:text-blue-800"
      >Watchlist <sup>{{ watchlistLength }}</sup></router-link
    >
    <router-link to="/add-video" class="text-blue-500 hover:text-blue-800"
      >Add Video</router-link
    >
  </div>
  <router-view />
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const watchlistLength = computed(
  () => store.getters["watchlist/getWatchlistLength"]
);
</script>
