<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue'

const apiUrl = 'http://items.magischer.de/api/products'
const limit = 5
const lang = 'en'
const products = ref([])
const meta = ref(null)
const product = ref(null)

function getProducts(url = apiUrl) {
    axios.get(url, {
        params: {
            limit: limit,
            lang: lang
        }
    }).then((res) => {
        meta.value = res.data
        products.value = res.data.data
    })
}

function showProduct(id) {
    axios.get((apiUrl + '/' + id),).then((res) => {
        product.value = res.data.data
    })
}

onMounted(function () {
    getProducts(apiUrl)

})
</script>

<template>
  <table>
    <thead>
      <th>Id</th>
      <th>Name</th>
      <th>Details</th>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td><button @click.prevent="showProduct(item.id)">Info</button></td>
      </tr>
    </tbody>
  </table>
  <div>
    <button @click.prevent="getProducts(meta.first_page_url)" :disabled="!meta?.first_page_url">first</button>
    <button @click.prevent="getProducts(meta?.prev_page_url)" :disabled="!meta?.prev_page_url">prev</button>
    <button @click.prevent="getProducts(meta?.next_page_url)" :disabled="!meta?.next_page_url">next</button>
    <button @click.prevent="getProducts(meta.last_page_url)" :disabled="!meta?.last_page_url">last</button>
  </div>
  <div>
    {{ product }}
  </div>
</template>