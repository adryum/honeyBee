<script setup>

</script>

<template>
  <div class="wrapper">
    <div class="upper-part">
      <div class="profile-image"></div>
      <div class="name"><h1>My name asdasd asdasdasdasdeeeeee</h1></div>
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
  background: rgba(50,50,50, 1);
}
.upper-part {
  margin: 6px;

  display: flex;
  flex: 2;
  gap: 10px;
}
.profile-image {
  flex: 1;
  aspect-ratio: 1/1;


  border-radius: 100%;
  background: cadetblue;
}
.name {
  display: flex;
  flex: 4;
  height: 100%;
  align-items: center;
}
.name > h1 {
  font-size: clamp(1.5rem,2vw, 3.5rem);
  margin: 0;

}
.experience {
  flex: 1;
  margin: 6px;

  width: calc(100% - 12px);
  height: 100%;

  background: #364f50;
}
</style>
