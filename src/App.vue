<script setup>
import Search from "./components/Search.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();

const watchlistLen = computed(
  () => store.getters["watchlist/getWatchlistLength"]
);

onMounted(() => store.dispatch("api/fetchCurrencies"));
</script>

<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-teal-500 p-6 rounded-sm"
  >
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <search></search>
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Youtube
        </router-link>
        <router-link
          to="/watchlist"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Watchlist <sup>{{ watchlistLen }}</sup>
        </router-link>
        <router-link
          to="/add-video"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Add Video
        </router-link>
        <router-link
          to="/api"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Currencies
        </router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>
