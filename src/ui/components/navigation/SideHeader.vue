<script setup>
import {ref} from "vue";

defineProps({
  selectedTab: Number,
})
const emits = defineEmits(['onClick'])
function selectTab(tabNumber) {
  console.log(tabNumber)
  emits('onClick', tabNumber)
}
const isSidebarExtended = ref(false)

const tabs = [
  {"name" : "Home"},
  {"name" : "Items"},
  {"name" : "Apiaries"},
  {"name" : "About"},
]
</script>

<template>
<div class="container">
  <h1>Honey Bee</h1>

<!--  <div class="image-div"><img src="/src/ui/assets/images/gas.jpg" alt="asd"/></div>-->
  <ul v-for="(tab, index) in tabs" :key="index"
      :class="{'selected' : (index === selectedTab)}"
      @click="selectTab(index)"
  >
    {{ tab.name }}
  </ul>

  <ul class="selected bottom-pusher">Options</ul>
  <button class="toggle-button" @click="isSidebarExtended = !isSidebarExtended"> close </button>
</div>
</template>

<style scoped>
h1 {
  display: flex;
  align-items: center;
  margin: 0;
  height: 5rem;
  padding-left: 30px;
  background: orangered;
}
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  box-sizing: border-box;

  height: 100%;
  background: linear-gradient( #ffe0bc, #ffd3a6);
}
.image-div {
  object-fit: cover;
}
.image-div > img {
  width: 100%;
  height: 100%;
}
ul {
  font-family: Ebrima;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 20px;
  height: 4rem;
  border-radius: 0 50px 50px 0;

}
ul:hover:not(.selected) {
  background: rgba(180, 180, 0, .3);
}
.bottom-pusher {
  margin-top: auto;
}
.selected {
  background: linear-gradient(90deg, coral, orange);
}
.toggle-button {
  position: absolute;
  right: -25px;
  top: 6rem;
  border-radius: 50%;
  aspect-ratio: 1/1;
  border: none;
  background: linear-gradient(30deg, orangered, orange);
  cursor: pointer;
}
</style>
