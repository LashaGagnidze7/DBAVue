<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const watchlist = computed(() => store.getters["watchlist/getWatchlist"]);
const removeFromWatchlist = (id) =>
  store.commit("watchlist/removeFromWatchlist", id);
const addToYoutube = (video) => store.commit("youtube/addToYoutube", video);
</script>

<template>
  <ul style="float:left; width: 45%;">
    <li v-for="video in watchlist" :key="video.id">
      <h1>{{ video.name }}</h1>
      <a :href="video.url">
        <img :src="video?.cover" />
      </a>
      <button
        @click="
          removeFromWatchlist(video.id);
          addToYoutube(video);
        "
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Remove
      </button>
      <p>{{ video.description }}</p>
      <p>{{ video.created_at }}</p>
    </li>
  </ul>
</template>
