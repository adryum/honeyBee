<script setup>
import ApiaryCard from "@/ui/components/cards/ApiaryCard.vue";

defineProps({
  apiaryList: Array
})
</script>

<template>
<ApiaryCard v-for="(apiary, i) in apiaryList" :key="i"

/>
</template>

<style scoped>

</style>
