<script setup>
import {ref, useTemplateRef} from "vue";

defineProps({
  name: String
})

let isAnimationCanceled = ref(false)

let card = useTemplateRef('card') // only this card element. NOT THOSE CHILDRENNN!!!!
function tran() {
  new Promise(resolve => setTimeout(() => {resolve; isAnimationCanceled.value = true;}, 100));
}

function clearTransform() {
  // Needs to be called only when exiting THE card
  card.value.style.transition = '.15s'
  card.value.style.transform = ''
  isAnimationCanceled.value = false
  console.log('cleared')
}

function leanTowardsMouse(e) {
  let elementsHalfOfTheWidth = card.value.getBoundingClientRect().width / 2
  let elementsHalfOfTheHeight = card.value.getBoundingClientRect().height / 2

  let elementCenterXPos = card.value.getBoundingClientRect().x + elementsHalfOfTheWidth  // y axis
  let elementCenterYPos = card.value.getBoundingClientRect().y + elementsHalfOfTheHeight  // x axis

  // Gets values from -1 to 1 (from cursor pos)
  let xPosError = (e.clientX - elementCenterXPos) / elementsHalfOfTheWidth
  let yPosError = (e.clientY - elementCenterYPos) / elementsHalfOfTheHeight

  if (isAnimationCanceled.value) card.value.style.transition = 'none'
  card.value.style.transform = `rotateY(${xPosError}deg) rotateX(${-yPosError}deg)`
}
</script>

<template>
  <div class="perspective-box">
    <div ref="card" class="item-card-wrapper cut-rounded-border">
      <div class="left-div flex-2">
        <div class="flex-2"><img class="card-image" src="/src/ui/assets/images/honeyCombWall.jpg" alt=""></div>
        <hr class="hr-horizontal-transparent">
        <h2 class="flex-1 bg-white margin-0">{{ name }}</h2>
      </div>
      <hr class="hr-vertical">
      <div class="right-div flex-1">
        <p class="flex-1 bg-white margin-0">Hive Count</p>
        <hr class="hr-horizontal-transparent">
        <p class="flex-1 bg-white margin-0">Locations</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-card-wrapper {
  display: flex;
  width: 100%;
  height: 25vw;

  transition: .1s;
}
.left-div {
  display: flex;
  flex-direction: column;
}
.right-div {
  display: flex;
  flex-direction: column;
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(0.5rem, 1rem, 3rem);

  flex: 1;
}
.text-div > h2 {
  margin: 0;

}
.perspective-box {
  perspective: 150px;
}
</style>
