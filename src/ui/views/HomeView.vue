<script setup>
import {ref, shallowRef} from "vue";
import {DeskView} from "@/main.js";
import HomeHeader from "@/ui/components/navigation/HomeHeader.vue";
import ApiaryList from "@/ui/components/ApiaryList.vue";
import InventoryItemList from "@/ui/components/InventoryItemList.vue";
import FinanceComponent from "@/ui/components/FinanceComponent.vue";
import SideHeader from "@/ui/components/navigation/SideHeader.vue";

const viewChoices = [
  {
    "text": "Apiaries",
    "view": DeskView.Apiaries,
  },
  {
    "text": "Inventory",
    "view": DeskView.Inventory,
  },
  {
    "text": "Finances",
    "view": DeskView.Finances,
  },
]

const isTabSelected = ref(false)
const currentView = ref(DeskView.Home)
const currentTab = shallowRef(InventoryItemList)

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

function setIsTabSelected(value) {
  isTabSelected.value = value
}

function setDrawerView(viewNumber) {

  if (currentView.value !== viewNumber) {
    setIsTabSelected(false)

    setTimeout(() => {
      setComponent(viewNumber)
        // Makes sure that tab doesn't get opened when home view is shown
        if (currentView.value !== DeskView.Home) {
          setIsTabSelected(true)
        }
    }, 100);
    currentView.value = viewNumber
  }
}

</script>

<template>
  <main class="main-grid">
    <transition name="bounce">
      <div v-if="isTabSelected" class="layer-container">
        <component :is="currentTab" v-bind="giveCurrentProperties" class="flex-1"/>
      </div>
    </transition>
    <HomeHeader class="header"/>
    <SideHeader class="sidebar"
                @onClick="(viewNumber) => setDrawerView(viewNumber)"
                :selectedTab="currentView"/>

<!--    <HomeHeader @onClick="(viewNumber) => setDrawerView(viewNumber)"-->
<!--                :currentView="currentView"-->
<!--                :viewChoices="viewChoices"-->
<!--    />-->
<!--&lt;!&ndash;    Drawer window. Might combine with header    &ndash;&gt;-->
  </main>
</template>

<style scoped>
.main-grid {
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 5rem 1fr;
}
.sidebar {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
}
.header {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
}
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
  grid-column: 2/3;
  grid-row: 2 /3;
  position: relative;
  display: flex;
  flex: auto;

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
