<script setup>
defineProps({
  name: String
})

let isAnimationCanceled = ref(false)

let card = useTemplateRef('card') // only this card element. NOT THOSE CHILDRENNN!!!!
function tran() {
  new Promise(resolve => setTimeout(() => {resolve; isAnimationCanceled.value = true; console.log('entered')}, 100));
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
    <div ref="card" id="card" @mouseleave="clearTransform" @mouseenter="tran" @mousemove="leanTowardsMouse" class="item-card-wrapper  scale-hover-1-1 pop-out-centered-shadow cut-rounded-border perspective-100">
      <img class="card-image" src="/src/ui/assets/images/honeyCombWall.jpg" alt="">
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<style scoped>
.item-card-wrapper {
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 25vw;

  transition: .1s;
}
.card-image {
  flex: 1;
  object-fit: cover;
}
.item-card-wrapper > h2 {

  display: flex;
  bottom: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 2rem, 3rem);
  text-align: center;

  max-height: 5vw;
  width: 100%;
  background: rgba(255,255,255, 0.5);
}
.perspective-box {
  perspective: 100px;
}
</style>
