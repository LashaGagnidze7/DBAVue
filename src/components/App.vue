<script setup>
import Search from "./Search.vue";
import Youtube from "./Youtube.vue";
import Watchlist from "./Watchlist.vue";
import AddVideo from "./AddVideo.vue";
</script>

<template>
  <search></search>
  <div class="flex flex-row space-x-4">
    <youtube></youtube>
    <watchlist></watchlist>
  </div>
  <add-video></add-video>
</template>
