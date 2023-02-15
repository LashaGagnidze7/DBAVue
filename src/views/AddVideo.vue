<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import router from "../router";

const store = useStore();

const name = ref("");
const url = ref("");
const description = ref("");
const cover = require("../assets/images/rock.png");
const created_at = new Date().toLocaleDateString();

function addToYoutube() {
  store.commit("youtube/addToYoutube", {
    name: name.value,
    url: url.value,
    description: description.value,
    cover,
    created_at,
  });
  router.replace({ path: "/" });
}
</script>

<template>
  <form prevent>
    <label for="name">Name: </label>
    <input type="text" id="name" v-model="name" />

    <label for="url">Url: </label>
    <input type="text" id="ulr" v-model="url" />

    <label for="description">Description:</label>
    <textarea
      id="description"
      style="resize: none; width: 250px; height: 100px"
      v-model="description"
    ></textarea>
    <br>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="addToYoutube"
    >
      Add Video
    </button>
  </form>
</template>
