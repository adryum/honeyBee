<script setup>
import {ref, shallowRef} from "vue";
import HomeHeader from "@/ui/components/navigation/HomeHeader.vue";
import ApiaryList from "@/ui/components/lists/ApiaryList.vue";
import InventoryItemList from "@/ui/components/lists/InventoryItemList.vue";
import FinanceComponent from "@/ui/components/FinanceComponent.vue";
import SideHeader from "@/ui/components/navigation/SideHeader.vue";
import NewItemForm from "@/ui/components/NewItemForm.vue";
import {TabNumber} from "@/main.js";



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
const currentTabNumber = ref(TabNumber.Home)
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
  if (currentTab.value === InventoryItemList) return { selectedProperties: [{"isCreatingItem" : isCreatingItem}] }

}

function setIsTabSelected(value) {
  isTabSelected.value = value
}

function setDrawerView(viewNumber) {

  if (currentTabNumber.value !== viewNumber) {
    setIsTabSelected(false)

    setTimeout(() => {
      setComponent(viewNumber)
        // Makes sure that tab doesn't get opened when home view is shown
        if (currentTabNumber.value !== TabNumber.Home) {
          setIsTabSelected(true)
        }
    }, 100);
    currentTabNumber.value = viewNumber
  }
}


const isCreatingItem = ref(false)
</script>

<template>
  <main class="main-grid">
    <transition name="bounce">
      <div v-if="isTabSelected" class="opened-tab-box"
           :class="(isSidebarExtended) ? 'center-content-sidebar-on' : 'center-content-sidebar-off'">
<!--        Inside shows selected component     -->
        <component :is="currentTab" v-bind="giveCurrentProperties" class="flex-1"/>
      </div>
    </transition>
    <HomeHeader class="header"
                :tabs="tabs"
                :selectedTab="currentTabNumber"
                @onCreateItem="isCreatingItem = true"
    />
    <SideHeader class="sidebar"
                @onClick="(viewNumber) => setDrawerView(viewNumber)"
                :topTabs="tabs.slice(0,4)"
                :bottomTabs="tabs.slice(4, tabs.length)"
                :selectedTab="currentTabNumber"
                :isSidebarExtended="isSidebarExtended" @onSidebarToggle="(val) => isSidebarExtended = val"
    />
<!--    Pop-ups   -->
    <NewItemForm v-if="isCreatingItem && currentTabNumber === TabNumber.Inventory"
                 @onCloseClick="isCreatingItem = false"
                 :class="(isSidebarExtended) ? 'center-content-sidebar-on' : 'center-content-sidebar-off'"/>
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
.center-content-sidebar-off {
  grid-column: 1/3;
  grid-row: 2/3;
}
.center-content-sidebar-on {
  grid-column: 2/3;
  grid-row: 2 /3;
}
.opened-tab-box {
  position: relative;
  display: flex;
  flex: auto;
/*
    padding: 3rem 10px 10px 10px;
    gap: 5rem;
    justify-content: center;
    flex-wrap: wrap;
*/
  overflow-y: scroll;
  background: #9a7f5b;
}

main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
