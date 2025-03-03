<script setup>

</script>

<template>
<div class="header-container">
  <RouterLink class="choice" to="apiaries">Apiaries</RouterLink>
  <RouterLink class="choice selected" to="finance">Finance</RouterLink>
  <RouterLink class="choice" to="inventory">Inventory</RouterLink>
  <RouterLink class="choice" to="profile">Profile</RouterLink>
</div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;

  width: 100%;
  height: 5vw;

  background: #323030;
}
.choice {
  display: flex;
  justify-content: center;
  flex: auto;
  font-size: 2vw;
  color: #ffd7b1;
  text-decoration: none;
  box-shadow: black 2px 2px 8px 0;
}
.choice:hover {
  box-shadow: black 2px 2px 8px 0 inset;
}
</style>
