<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const youtube = computed(() => store.getters["youtube/getYoutube"]);
const removeFromYoutube = (id) => store.commit("youtube/removeFromYoutube", id);
const addToWatchlist = (video) =>
  store.commit("watchlist/addToWatchlist", video);
</script>

<template>
  <ul style="float: left; width: 45%">
    <li v-for="video in youtube" :key="video.id">
      <h1>{{ video.name }}</h1>
      <a :href="video.url" target="blank">
        <img :src="video?.cover" />
      </a>
      <button
        @click="
          removeFromYoutube(video.id);
          addToWatchlist(video);
        "
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add
      </button>
      <p>{{ video.description }}</p>
      <p>{{ video.created_at }}</p>
    </li>
  </ul>
</template>
