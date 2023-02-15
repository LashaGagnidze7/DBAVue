<script setup>
import { useStore } from "vuex";

const store = useStore();

const currencies = store.getters["api/getCurrencies"];
</script>

<template>
    <p>{{ currencies }}</p>
</template>
