<script setup>


import {ref} from "vue";
import {DeskView} from "@/main.js";
import HomeHeader from "@/ui/components/HomeHeader.vue";
import HiveLayer from "@/ui/components/HiveLayer.vue";
let isHiveLayerSelected = ref(false)
let currentView = ref(DeskView.Home)

function isSelected(value) {
  isHiveLayerSelected.value = value
}

function setDrawerView(view) {
  isSelected(false)

  if (currentView.value === view) {
    currentView.value = DeskView.Home
  } else {
    setTimeout(() => isSelected(true), 100);
    currentView.value = view
  }
}

</script>

<template>
  <HomeHeader @onClick="(componentDrawer) => setDrawerView(componentDrawer)"/>
  <main>
    <HiveLayer :selected="isHiveLayerSelected">

    </HiveLayer>
<!--    <div class="desk">-->
<!--      <div v-if="currentView === DeskView.Apiaries" class="spaced-evenly-container scroll-y">-->
<!--        <ApiaryCard v-for="i in 10" :key="i" :name="'hive numero ' + i"/>-->
<!--      </div>-->
<!--      <div v-if="currentView === DeskView.Inventory" class="spaced-evenly-container scroll-y">-->
<!--        <ItemCard v-for="i in 10" :key="i"/>-->
<!--      </div>-->
<!--      <div v-if="currentView === DeskView.Finances" class="spaced-evenly-container scroll-y">-->
<!--        <ItemCard v-for="i in 10" :key="i"/>-->
<!--      </div>-->
<!--    </div>-->
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.desk {
  display: flex;
  flex: 1;
  background: #fff4d6;
}
</style>
