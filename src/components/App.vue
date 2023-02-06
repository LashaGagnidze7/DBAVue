<script setup>
import Header from "./Header.vue";
import ProductList from "./ProductList.vue";
import HLine from "./HLine.vue";
import Footer from "./Footer.vue";

</script>

<template>
  <Header></Header>
  <HLine></HLine>
  <ProductList></ProductList>
  <HLine></HLine>
  <Footer></Footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}
</style>
