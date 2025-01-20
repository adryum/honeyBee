<script>
export default {
  props: ['icon', 'borderColor', 'username']
}
</script>

<template>
  <div class="wrapper">
    <div class="upper-part">
      <img alt="profile picture" src="">
      <div class="name"><h1>{{ username }}</h1></div>
    </div>
    <div class="experience"></div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  background: var(--lighter-dark-color);
}
.upper-part {
  margin: 6px;

  display: flex;
  flex: 2;
  gap: 10px;
  overflow: hidden;
}
img {
  border: 5px solid v-bind(borderColor);

  aspect-ratio: 1/1;

  border-radius: 100%;
  background: cadetblue;
}
.name {
  margin: auto;
}
.name > h1 {
  color: var(--font-color-main);
  font-size: clamp(1.5rem,2vw, 3.5rem);
  margin: 0;

}
.experience {
  flex: 1;
  margin: 6px;

  width: calc(100% - 12px);
  background: #789197;
}
</style>
