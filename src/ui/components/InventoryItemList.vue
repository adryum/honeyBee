<script setup>
import ItemCard from "@/ui/components/cards/ItemCard.vue";

defineProps({
  apiaryList: Array
})
</script>

<template>
  <ItemCard v-for="i in 10" :key="i" src="/src/ui/assets/images/axe.jpg"/>
</template>

<style scoped>

</style>
