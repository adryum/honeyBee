<script setup>
defineProps({
  onCloseClick: Function
})
</script>

<template>
<div class="modal-container">
  <div class="pop-up-card">
    <div class="image-div">
      <img src="/src/ui/assets/images/honeyCombWall.jpg" alt="modal-image">
    </div>
    <hr class="modal-hr-vertical">
    <div class="right-side">
      <div class="top-row">
        <h1>NAme</h1>
        <button class="button">Settings</button>
        <button class="button" @click="onCloseClick">X</button>
      </div>
      <hr class="modal-hr-top-horizontal">
      <div class="bottom-row">

        <div class="assigned modal-column dimmed-window">
          <div class="sub-header">
            <h2>Assigned</h2>
            <button>Settings</button>
          </div>
          <hr class="modal-hr-horizontal">
          <div class="scrollable-y"></div>
        </div>

        <div class="available modal-column dimmed-window">
          <div class="sub-header">
            <h2>Available</h2>
            <button>Settings</button>
          </div>
          <hr class="modal-hr-horizontal">
          <div class="scrollable-y"></div>
        </div>

        <div class="third-column modal-column ">
          <div class="description dimmed-window">
            <div class="sub-header">
              <h2>Description</h2>
              <button>Settings</button>
            </div>
            <hr class="modal-hr-horizontal">
            <div class="scrollable-y">
              <p>
                Dis sum good shit. Need More
                Dis sum good shit. Need More
                Dis sum good shit. Need More
                Dis sum good shit. Need More
                Dis sum good shit. Need More
                Dis sum good shit. Need MoreDis sum good shit. Need More
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->

<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->
<!--                Dis sum good shit. Need MoreDis sum good shit. Need More-->
<!--                Dis sum good shit. Need More-->

              </p>
            </div>
          </div>
          <div class="add-item dimmed-window">
            add
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
@keyframes grow-in {
  from{
    scale: .95;
  }
  to {
    scale: 1;
  }
}
.sub-header {
  display: flex;
}
.sub-header > h2 {
  flex: auto;
}
.modal-hr-top-horizontal {
  border: none;
  height: 4px;
  background: #323030;
  margin: 0 0 1rem;
}
.modal-hr-horizontal {
  border: none;
  height: 4px;
  margin: 0;
  background: #323030;
}
.modal-hr-vertical {
  border: none;
  width: 8px;
  margin: 0;
  background: #323030;
}
.modal-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* puts modal below header */
  height: calc(100% - var(--header-height));
  bottom: 0;
  backdrop-filter: brightness(20%) blur(4px);

  transition: .3s;
}
.pop-up-card {
  display: flex;
  border-radius: .7rem;

  font-family: Ebrima;
  font-weight: bold;

  width: 80%;
  height: 80%;
  max-width: calc(100% - 3rem);
  max-height: calc(100% - 3rem);
  overflow-y: scroll;

  animation: grow-in ease-out .1s;
}
.right-side {
  display: flex;
  flex-direction: column;

  background: linear-gradient(150deg, #3b3c43 , #313137);
}
.image-div {
  width: 50%;
}
.image-div > img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}
.button {
  aspect-ratio: 1/1;
  height: 100%;
}
.top-row {
  display: flex;
  height: 8rem;
}
.bottom-row {
  display: flex;
  flex: auto;
  gap: 1rem;
  margin: 0 1rem 1rem 1rem;
}
.modal-column {
  width: 100%;
}
.dimmed-window {
  border-radius: .5rem;
  backdrop-filter: brightness(60%);
}
.third-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.description {
  display: flex;
  flex-direction: column;
  max-height: 50%;
}
.add-item {
  flex-basis: 30%;
}

/* text css */
.top-row > h1 {
  margin: 0 0 0 1rem;
  font-size: 3rem;
}
.pop-up-card  h1, h2 {
  flex: auto;
  align-self: center;
  color: azure;
}
.pop-up-card h2 {
  margin: .5rem 0 .5rem 1rem;
  font-size: 1.5rem;
}
.pop-up-card p {
  margin: 1rem 0 0 1rem;
  color: #bfbd9b;
  font-size: 1.1rem;
}
</style>
