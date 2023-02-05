<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const apiUrl = "http://items.magischer.de/api/products";
let limit = 5;
const limits = [5, 10, 15, 20];
let lang = "en";
const langs = ["en", "ru", "ka"];
const products = ref([]);
const meta = ref(null);
const product = ref(null);
const checkedIds = ref([]);
const listRender = ref(true);
const name = ref(null);
const price = ref(null);

function getProducts(url = apiUrl) {
  axios
    .get(url, {
      params: {
        limit: limit,
        lang: lang,
      },
    })
    .then((res) => {
      meta.value = res.data;
      products.value = res.data.data;
    });
}

function handleMassDelete() {
  products.value.forEach((value, index, array) => {
    const i = checkedIds.value.indexOf(value.id);
    if (i !== -1) {
      checkedIds.value.splice(i, 1);
      array.splice(index, 1);
    }
  });
}

function handleCheck(e) {
  const id = e.target.id;
  const index = checkedIds.value.indexOf(id);
  if (index !== -1) {
    checkedIds.value.splice(index, 1);
  } else {
    checkedIds.value.push(parseInt(id));
  }
}

function toggleRender() {
  listRender.value = !listRender.value;
}

function addProduct() {
  products.value.push({
    id: products.value.length + 1,
    name: name.value,
    price: price.value,
    img: {
      cover: require("./assets/images/no-product-image.png"),
    },
  });
  toggleRender();
}

onMounted(function () {
  getProducts(apiUrl);
});
</script>

<template>
  <header>
    <h1>Product List</h1>
    <div v-if="listRender">
      <select v-model="limit" @change="getProducts()">
        <option v-for="item in limits" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
      <select v-model="lang" @change="getProducts()">
        <option v-for="item in langs" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
      <a @click="toggleRender">ADD</a>
      <button type="button" id="delete-product-btn" @click="handleMassDelete">
        MASS DELETE
      </button>
    </div>
  </header>
  <hr />
  <main v-if="listRender">
    <div
      v-for="item in products"
      :key="item.id"
      :class="{ checked: checkedIds.includes(item.id) }"
    >
      <div>
        <input
          type="checkbox"
          class="delete-checkbox"
          :id="item.id"
          @click="handleCheck"
        />
      </div>
      <div>
        <img :src="item.img.cover" />
        <p>{{ item.id }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.price + " ლარი" }}</p>
      </div>
    </div>
  </main>
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
  <hr />
  <footer>
    <div v-if="listRender" class="buttons">
      <button
        @click.prevent="getProducts(meta.first_page_url)"
        :disabled="!meta?.first_page_url"
      >
        first
      </button>
      <button
        @click.prevent="getProducts(meta?.prev_page_url)"
        :disabled="!meta?.prev_page_url"
      >
        prev
      </button>
      <button
        @click.prevent="getProducts(meta?.next_page_url)"
        :disabled="!meta?.next_page_url"
      >
        next
      </button>
      <button
        @click.prevent="getProducts(meta.last_page_url)"
        :disabled="!meta?.last_page_url"
      >
        last
      </button>
    </div>
    <div>
      {{ product }}
    </div>
  </footer>
</template>
