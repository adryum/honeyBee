<script setup>
import {ref, shallowRef} from "vue";
import HomeHeader from "@/ui/components/navigation/HomeHeader.vue";
import ApiaryList from "@/ui/components/ApiaryList.vue";
import InventoryItemList from "@/ui/components/InventoryItemList.vue";
import FinanceComponent from "@/ui/components/FinanceComponent.vue";
import SideHeader from "@/ui/components/navigation/SideHeader.vue";

const TabNumber = Object.freeze({
  Home : 0,
  Apiaries : 1,
  Inventory : 2,
  Finances : 3,
  About : 4,
  Contact : 5,
  Settings : 6
});

const tabs = [
  {
    "name" : "Home",
    "tabNumber" : TabNumber.Home,
    "iconClass" : "fa-solid fa-house"
  },
  {
    "name" : "Apiaries",
    "tabNumber" : TabNumber.Apiaries,
    "iconClass" : "fa-brands fa-hive"
  },
  {
    "name" : "Inventory",
    "tabNumber" : TabNumber.Inventory,
    "iconClass" : "fa-solid fa-warehouse"
  },
  {
    "name": "Finances",
    "tabNumber": TabNumber.Finances,
    "iconClass": "fa-solid fa-chart-simple"
  },
  {
    "name": "About",
    "tabNumber" : TabNumber.About
  },
  {
    "name" : "Contact",
    "tabNumber" : TabNumber.Contact
  },
  {
    "name" : "Settings",
    "tabNumber" : TabNumber.Settings
  },
]

const isTabSelected = ref(false)
const currentView = ref(TabNumber.Home)
const currentTab = shallowRef(InventoryItemList)
const isSidebarExtended = ref(true)

function setComponent(view) {
  switch (view) {
    case TabNumber.Apiaries: currentTab.value = ApiaryList;  break;
    case TabNumber.Inventory: currentTab.value = InventoryItemList;  break;
    case TabNumber.Finances: currentTab.value = FinanceComponent;  break;
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
        if (currentView.value !== TabNumber.Home) {
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
      <div v-if="isTabSelected" class="layer-container"
           :class="(isSidebarExtended) ? 'layer-container-sidebar-on' : 'layer-container-sidebar-off'"
      >
        <component :is="currentTab" v-bind="giveCurrentProperties" class="flex-1"/>
      </div>
    </transition>
    <HomeHeader class="header"
                :tabs="tabs"
                :selectedTab="currentView"
    />
    <SideHeader class="sidebar"
                @onClick="(viewNumber) => setDrawerView(viewNumber)"
                :topTabs="tabs.slice(0,4)"
                :bottomTabs="tabs.slice(4, tabs.length)"
                :selectedTab="currentView"
                :isSidebarExtended="isSidebarExtended" @onSidebarToggle="(val) => isSidebarExtended = val"
    />

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
  z-index: 3;
}
.header {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  z-index: 2;
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
.layer-container-sidebar-off {
  grid-column: 1/3;
  grid-row: 2/3;
}
.layer-container-sidebar-on {
  grid-column: 2/3;
  grid-row: 2 /3;
}
.layer-container {
  z-index: 1;

  position: relative;
  display: flex;
  flex: auto;

  padding: 3rem 10px 10px 10px;
  gap: 5rem;
  justify-content: center;

  background: #9a7f5b;
  flex-wrap: wrap;
  overflow-y: scroll;
}

main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
