<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue'

const apiUrl = 'http://items.magischer.de/api/products'
const limit = 5
const lang = 'en'
const products = ref([])
const meta = ref(null)
const product = ref(null)
const checkedIds = ref([])

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

/*function showProduct(id) {
  axios.get((apiUrl + '/' + id),).then((res) => {
    product.value = res.data.data
  })
}*/

function handleMassDelete() {
  products.value = products.value.filter((p) => !checkedIds.value.includes(p.id))
}

function handleCheck(e) {
  const id = e.target.id
  const index = checkedIds.value.indexOf(id)
  if (index != -1) {
    checkedIds.value.splice(index, 1)
  } else {
    checkedIds.value.push(id)
  }
}

onMounted(function () {
  getProducts(apiUrl)
})
</script>

<template>
  <header>
    <h1>Product List</h1>
    <div>
      <a>ADD</a>
      <button type="button" id="delete-product-btn" @click="handleMassDelete">MASS DELETE</button>
    </div>
  </header>
  <hr />
  <main>
    <div v-for="item in products" :key="item.id" :class="{ 'checked': checkedIds.includes(String(item.id)) }">
      <div>
        <input type="checkbox" class="delete-checkbox" :id="item.id" @click="handleCheck" />
      </div>
      <div>
        <p>{{ item.id }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.details }}</p>
      </div>
    </div>
  </main>
  <hr />
  <footer>
    <h4>DBA Project Assignment</h4>
  </footer>
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

<style scoped>
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

/* for App Component */
hr {
  height: 4px;

  background-color: black;

  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;

  margin: 10px 30px;
}

/* for header */
header {
  display: flex;
  justify-content: space-between;
}

header h1,
div {
  margin-top: 15px;
}

header h1 {
  margin-left: 40px;
}

header div {
  padding-right: 40px;
}

button,
a {
  text-decoration: none;
  color: black;
  background-color: white;

  font-size: 20px;

  margin-left: 10px;
  padding: 4px;

  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 4px 4px 1px black;

  cursor: pointer;
}

button:active,
a:active {
  box-shadow: 3px 3px 1px black;
  transform: translate3d(1px, 1px, 1px);
}

header div a:hover {
  background-color: yellowgreen;
}

header div button:hover {
  background-color: indianred;
}

.add a:hover {
  background-color: indianred;
}

.add button:hover {
  background-color: steelblue;
}

/* for main */
main {
  height: 80vh;
  overflow-Y: scroll;

  display: flex;
  flex-wrap: wrap;
}

main>div {
  height: 200px;
  width: 250px;

  border: 1px solid black;
  box-shadow: 5px 5px 1px black;

  margin: 30px;
}

main>div p {
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

/* for footer */
footer {
  display: flex;
  justify-content: center;
}

footer p {
  color: black;
}
</style>