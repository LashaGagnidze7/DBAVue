<template>
  <select v-model="limit" @change="getData()">
    <option v-for="(limit, index) in limits" :key="index" :value="limit">Per Page: {{ limit }}</option>
  </select>
  <select v-model="lang" @change="getData()">
    <option v-for="(lang, index) in languages" :key="index" :value="lang">{{ lang }}</option>
  </select>
  <table style="margin: 5px">
    <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Image</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="product in products" :key="product.index">
      <td>{{ product.id }}</td>
      <td>{{ product.name }}</td>
      <td><img style="width: 80px; height: auto;" :src="product.img.cover" alt="cover img"/></td>
    </tr>
    </tbody>
  </table>
  <div>
    <a :disabled="!result?.first_page_url" @click.prevent="getData(result.first_page_url)">First Page</a>
    <button :disabled="!result?.prev_page_url" @click="getData(result.prev_page_url)">Previous</button>
    <button :disabled="!result?.next_page_url" @click="getData(result.next_page_url)">Next</button>
    <a :disabled="!result?.last_page_url" @click.prevent="getData(result.last_page_url)">Last Page</a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      limits: [5, 10, 15, 20],
      limit: 5,
      languages: ['ge', 'en'],
      lang: 'ge',
      url: `http://items.magischer.de/api/products`,
      products: [],
      result: null
    }
  },
  methods: {
    getData(url = this.url) {
      axios.get(url, {
        params: {
          limit: this.limit,
          lang: this.lang
        }
      }).then((response) => {
        this.result = response.data
        this.products = response.data.data
      })
    },
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
* {
  margin: 3px;
}
a, button, select {
  cursor: pointer;
}
</style>