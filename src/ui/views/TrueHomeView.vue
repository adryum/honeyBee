<script setup>
import {ref} from "vue";
import {DeskView} from "@/main.js";
import HomeHeader from "@/ui/components/HomeHeader.vue";
import HiveLayer from "@/ui/components/HiveLayer.vue";
import ApiaryList from "@/ui/components/ApiaryList.vue";
let isHiveLayerSelected = ref(false)
let currentView = ref(DeskView.Home)

const currentTab = ref(ApiaryList)

function setComponent(view) {
  switch (view) {
    case DeskView.Apiaries: currentTab.value = ApiaryList;  break;
    case DeskView.Inventory: currentTab.value = ApiaryList;  break;
    case DeskView.Finances: currentTab.value = ApiaryList;  break;
  }
}

function giveCurrentProperties() {
  if (currentTab.value === ApiaryList) return { apiaryList: [] }

}

function isSelected(value) {
  isHiveLayerSelected.value = value
}

function setDrawerView(view) {
  isSelected(false)

  if (currentView.value === view) {
    currentView.value = DeskView.Home
  } else {
    setTimeout(() => {
      setComponent(view)
      isSelected(true)
    }, 100);
    currentView.value = view
  }
}

</script>

<template>
  <HomeHeader @onClick="(componentDrawer) => setDrawerView(componentDrawer)"/>
  <main>
    <HiveLayer :selected="isHiveLayerSelected">
      <component :is="currentTab" v-bind="giveCurrentProperties"/>
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
