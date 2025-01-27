<script>
import {PodiumPlace} from "@/main.js";
import ProfileIcon from "@/components/ProfileIcon.vue";

export default {
  components: {ProfileIcon},
  computed: {
    PodiumPlace() {
      return PodiumPlace
    }
  },
  props: ['place', 'pathToIcon', 'borderWidth', 'borderColor', 'userName']
}
</script>

<template>
<div class="column">
<!--  User on top-->
  <h1 class="username">{{ userName }}</h1>
  <ProfileIcon :pathToIcon="pathToIcon" :borderColor="borderColor" :borderWidth="borderWidth" iconWidth="50%"/>
<!--  Pillar-->
  <div v-if="place === PodiumPlace.First" class="first"></div>
  <div v-else-if="place === PodiumPlace.Second" class="second"></div>
  <div v-else-if="place === PodiumPlace.Third" class="third"></div>
</div>
</template>

<style scoped>
.username {
  margin: 0;

}
.column {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.first {
  width: 75%;
  min-height: 150px;
  background: gold;
}
.second {
  width: 75%;
  min-height: 100px;
  background: silver;
}
.third {
  width: 75%;
  min-height: 50px;
  background: saddlebrown;
}
</style>
