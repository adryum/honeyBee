<script setup>
import {ref, shallowRef} from "vue";
import {DeskView} from "@/main.js";
import HomeHeader from "@/ui/components/HomeHeader.vue";
import ApiaryList from "@/ui/components/ApiaryList.vue";
import InventoryItemList from "@/ui/components/InventoryItemList.vue";
import FinanceComponent from "@/ui/components/FinanceComponent.vue";

let isHiveLayerSelected = ref(true)
let currentView = ref(DeskView.Home)

const currentTab = shallowRef(ApiaryList)

function setComponent(view) {
  switch (view) {
    case DeskView.Apiaries: currentTab.value = ApiaryList;  break;
    case DeskView.Inventory: currentTab.value = InventoryItemList;  break;
    case DeskView.Finances: currentTab.value = FinanceComponent;  break;
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

  console.log(currentTab.value)
}

</script>

<template>
  <main>
    <HomeHeader @onClick="(componentDrawer) => setDrawerView(componentDrawer)" :currentView="currentView"/>
    <transition name="bounce">
      <div v-if="isHiveLayerSelected" class="layer-container">
        <component :is="currentTab" v-bind="giveCurrentProperties" class="flex-1"/>
      </div>
    </transition>
  </main>
</template>

<style scoped>
.bounce-enter-active {
  transition: .3s ease-in-out;
  animation: bounce-in .2s;
}
.bounce-leave-active {
  animation: close .05s ;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-100%);
  }
  30% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes close {
  from {

  }
  to {
    transform: translateY(-100%);
  }
}
.layer-container {
  position: relative;
  display: flex;
  flex: auto;
  margin-top: var(--header-height);

  padding: 3rem 10px 10px 10px;
  gap: 5rem;
  justify-content: center;

  background: #ffd7b1;
  flex-wrap: wrap;
  overflow-y: scroll;
}

main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
