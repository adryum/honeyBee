<script setup>

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
        <button class="button">X</button>
      </div>
      <hr class="modal-hr-top-horizontal">
      <div class="bottom-row">
        <div class="assigned">
          <div class="sub-header">
            <h2>Assigned</h2>
            <button>Settings</button>
          </div>
          <hr class="modal-hr-horizontal">

        </div>
        <div class="available">
          <div class="sub-header">
            <h2>Available</h2>
            <button>Settings</button>
          </div>
          <hr class="modal-hr-horizontal">
        </div>
        <div class="third-column">
          <div class="description">
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

              </p>
            </div>
          </div>
          <div class="add-item">
            add
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
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
  width: 4px;
  margin: 0;
  background: #323030;
}
.modal-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* puts modal below header */
  height: calc(100% - var(--header-height));
  bottom: 0;
  backdrop-filter: brightness(20%) blur(4px);
}
.pop-up-card {
  display: flex;
  border-radius: .7rem;
  overflow: clip;

  font-family: Ebrima;
  font-weight: bold;

  min-width: 80%;
  min-height: 80%;
  max-width: calc(100% - 3rem);
  max-height: calc(100% - 3rem);
}
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
.right-side {
  display: flex;
  flex-direction: column;
  flex: auto;
  background: linear-gradient(150deg, #3b3c43 40%, #313137);
}
.button {
  aspect-ratio: 1/1;
}
.top-row {
  display: flex;
  height: 8rem;
}
.bottom-row {
  display: flex;
  height: 100%;
  gap: 1rem;
  margin: 0 1rem 1rem 1rem;
}
.assigned, .available, .description {
  border-radius: .5rem;
  overflow: clip;
}
.assigned, .available {
  flex: auto;
  width: 50%;
  height: 100%;
  backdrop-filter: brightness(60%);
}
.third-column {
  display: flex;
  flex: auto;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem
}
.description {
  display: flex;
  flex-direction: column;
  backdrop-filter: brightness(60%);
  flex-grow: 1;
  max-height: 50%;
}
.scrollable-y {
  flex: auto;
  overflow-y: scroll;
}
.scrollable-y > p {
  max-width: 100%;
}
.add-item {
  flex-grow: 1;
  backdrop-filter: brightness(60%);
  flex-basis: 30%;
}
.image-div {
  width: 30%;
  overflow: hidden;
}
.image-div > img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}
</style>
