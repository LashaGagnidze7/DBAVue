<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { RouterLink } from "vue-router";

const store = useStore();

const youtube = computed(() => store.getters["youtube/getYoutube"]);

const removeFromYoutube = (id) => store.commit("youtube/removeFromYoutube", id);
const addToWatchlist = (video) =>
  store.commit("watchlist/addToWatchlist", video);
</script>

<template>
  <ul class="grid gap-4 grid-cols-5 grid-rows-5">
    <li v-for="video in youtube" :key="video.id" :style="video.style">
      <h1>{{ video.name }}</h1>
      <a :href="video.url" target="blank">
        <img :src="video.cover" class="br-red" />
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
      <RouterLink
        :to="'/' + video.id"
        class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        >show id</RouterLink
      >
      <p>{{ video.description }}</p>
      <p>{{ video.created_at }}</p>
      <button
        @click="removeFromYoutube(video.id)"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Delete
      </button>
    </li>
  </ul>
</template>
