<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

const groceryList = ref([
    { id: 0, text: 'Vegetables' },
    { id: 1, text: 'Cheese' },
    { id: 2, text: 'Whatever else humans are supposed to eat' }
])
</script>

<template>
    <ol>
        <TodoItem v-for="item in groceryList" :todo="item" :key="item.id"></TodoItem>
    </ol>
</template>