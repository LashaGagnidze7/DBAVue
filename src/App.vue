<script setup>
import Search from "./components/Search.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();
const linkStyle = "text-blue-500 hover:text-blue-800";

const watchlistLen = computed(
  () => store.getters["watchlist/getWatchlistLength"]
);

onMounted(() => store.dispatch("api/fetchCurrencies"));
</script>

<template>
  <search></search>
  <div class="flex flex-row space-x-4">
    <router-link to="/" :class="linkStyle"> Youtube </router-link>
    <router-link to="/watchlist" :class="linkStyle">
      Watchlist <sup>{{ watchlistLen }}</sup>
    </router-link>
    <router-link to="/add-video" :class="linkStyle"> Add Video </router-link>
    <router-link to="/api" :class="linkStyle"> Currencies </router-link>
  </div>
  <router-view />
</template>
