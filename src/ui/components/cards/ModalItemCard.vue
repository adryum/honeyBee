<script setup>

</script>

<template>
<div class="modal-container">
  <div class="pop-up-card">
    <div class="image-div">
      <img src="/src/ui/assets/images/honeyCombWall.jpg" alt="modal-image">
    </div>
    <div class="right-side">
      <div class="top-row">
        <p>name</p>
      </div>
      <div class="bottom-row">
        <div class="assigned">
          assigned
        </div>
        <div class="available">
          available
        </div>
        <div class="third-column">
          <p class="description">
            Dis sum good shit. Need More
          </p>
          <div class="add-item">

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
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

  max-width: calc(100% - 3rem);
  max-height: calc(100% - 3rem);
  background: white;
}
.right-side {
  display: flex;
  flex-direction: column;
}
.image-div {
  width: 30%;
  overflow: hidden;
}
.image-div > img {
  object-fit: cover;
}
</style>
