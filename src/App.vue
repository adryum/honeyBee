<script setup>
import { RouterView } from 'vue-router'
import ExpandedItemCard from "@/ui/components/cards/ExpandedItemCard.vue";
import NewItemForm from "@/ui/components/NewItemForm.vue";
</script>

<template>

<!--  Link buttons -->
<!--  <RouterLink to="/">Home</RouterLink>-->
<!--  <RouterLink to="/about">About</RouterLink>-->

<!--  Composable that makes link buttons work-->
<!--  <ExpandedItemCard/>-->
  <RouterView />
</template>

<style scoped>

</style>
