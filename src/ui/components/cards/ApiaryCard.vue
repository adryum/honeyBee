<script setup>
defineProps({
  name: String
})
</script>

<template>
  <div class="item-card-wrapper cut-rounded-border display-flex-row">
    <div class="display-flex-column flex-2">
      <div class="top-row bg-white display-flex-row">
        <h1>NR. 1</h1>
        <h2 class="flex-1">NAme n shit</h2>
        <div>options</div>
      </div>
      <hr class="hr-horizontal-transparent">
      <div class="bottom-row display-flex-row flex-1">
        <div class="left-side flex-3 display-flex-column">
          <div class="image-container bg-white"><img class="card-image" src="/src/ui/assets/images/honeyCombWall.jpg" alt=""></div>

          <hr class="hr-horizontal-transparent">

          <div class="bottom flex-1 display-flex-row">
            <div class="description flex-1 bg-white">description</div>
            <hr class="hr-vertical">
            <div class="notes flex-1 bg-white">notes</div>
          </div>
        </div>

        <hr class="hr-vertical">

        <div class="right-side display-flex-column flex-2">
          <div class="flex-1 bg-white">hives</div>
          <hr class="hr-horizontal-transparent">
          <div class="flex-1 bg-white">weather</div>
          <hr class="hr-horizontal-transparent">
          <div class="flex-1 bg-white">location</div>
        </div>
      </div>
    </div>
    <hr class="hr-vertical">
    <div class="flex-1 bg-white">Action history</div>
  </div>
</template>

<style scoped>
.item-card-wrapper {
  width: 100%;
  height: 25vw;
  font-size: 1rem;

  transition: .1s;
}
.left-side {
  align-items: stretch;
}
.image-container {


}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
