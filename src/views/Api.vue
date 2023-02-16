<script setup>
import { useStore } from "vuex";
import { ref, watch } from "vue";
import currConvert from "../utility/currconvert";

const store = useStore();

const from = ref("USD");
const to = ref("EUR");

const quantity = ref("1");
const converted = ref("");

const invalid = ref(false);

const currencies = store.getters["api/getCurrencies"];

const fromTo = () => {
  converted.value = invalid.value
    ? "Invalid input!"
    : currConvert(
        store.getters["api/getCurrencyByCode"](from.value),
        store.getters["api/getCurrencyByCode"](to.value),
        quantity.value
      );
};

watch(quantity, (newQuantity) => {
  invalid.value = !/^[1-9]+\d*$/.test(newQuantity);
});
</script>

<template>
  <form @submit.prevent="fromTo">
    <label for="from" style="display: inline">From</label>
    <select v-model="from">
      <option v-for="curr in currencies" :key="curr.code" :value="curr.code">
        {{ curr.code }}
      </option>
    </select>
    <input
      type="text"
      id="from"
      v-model="quantity"
      :class="{ 'br-rd': invalid }"
    />

    <label for="to" style="display: inline">To</label>
    <select v-model="to">
      <option v-for="curr in currencies" :key="curr.code" :value="curr.code">
        {{ curr.code }}
      </option>
    </select>
    <input type="text" id="to" :value="converted" disabled />

    <button
      style="margin-top: 10px"
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      Convert
    </button>
  </form>
</template>
