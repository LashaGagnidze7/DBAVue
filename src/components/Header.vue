<template>
  <header>
    <h1>Product List</h1>
    <div>
      <select @change="setApiLimit">
        <option v-for="item in limits" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
      <select @change="setApiLanguage">
        <option v-for="item in langs" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
      <a>ADD</a>
      <button type="button" id="delete-product-btn">MASS DELETE</button>
    </div>
  </header>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const limits = store.getters["products/getLimits"];
const langs = store.getters["products/getLangs"];

const setApiLimit = (e) => {
  store.commit("products/setApiLimit", e.target.value);
  store.dispatch("products/getProducts");
};
const setApiLanguage = (e) => {
  store.commit("products/setApiLanguage", e.target.value);
  store.dispatch("products/getProducts");
};

store.dispatch("products/getProducts");
</script>

<style scoped>
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
</style>
