<template>
  <main>
    <div v-for="item in products" :key="item.id">
      <div>
        <input type="checkbox" class="delete-checkbox" :id="item.id" />
      </div>
      <div>
        <img :src="item.img.cover" />
        <p>{{ item.id }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.price + " ლარი" }}</p>
      </div>
    </div>
  </main>
  <!--
  <main v-else>
    <form @submit.prevent="addProduct">
      <div>
        <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Price ($)</label>
        <input type="text" v-model="price" />
      </div>
      <button type="submit">Add Product</button>
    </form>
  </main>
--></template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = computed(() => store.state.products.products);

store.dispatch("products/getProducts");
</script>

<style scoped>
main {
  height: 80vh;
  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
}

main > div {
  height: 200px;
  width: 250px;

  border: 1px solid black;
  border-radius: 7.5px;

  background-color: #eeeeee;

  box-shadow: 5px 5px 1px black;

  margin: 30px;
}

main > div p {
  margin-bottom: 5px;
}

.delete-checkbox {
  margin: 10px;
}

main div div:first-child {
  margin: 5px;
}

main div div:nth-child(2) {
  text-align: center;
}

main form {
  display: flex;
  flex-direction: column;

  font-size: 20px;

  margin-left: 40px;
}

main form div {
  width: 210px;
}

main form div:nth-child(4) {
  width: 250px;
}

main form div:nth-child(5) {
  display: flex;
  flex-direction: column;
  width: 250px;
}

main form div input {
  width: 130px;
  float: right;
}

main form div select {
  margin-left: 5px;
  font-size: 15px;
}

.error,
.error1 {
  color: red;
}

.error {
  font-size: 15px;
}

.checked {
  background-color: indianred;
}

main img {
  width: 25%;
  height: 25%;
  border-radius: 10px;
}
</style>
