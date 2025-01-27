<script>
import PodiumColumn from "@/components/PodiumColumn.vue";
import {PodiumPlace} from "@/main.js";
export default {
  components: {PodiumColumn},
  props: ['username1', 'username2', 'username3'],
  computed: {
    PodiumPlace() {
      return PodiumPlace
    },
  }
}
</script>

<template>
<div class="podium">
  <PodiumColumn :place="PodiumPlace.Second" :userName="username1" borderWidth="5px" borderColor="Red"/>
  <PodiumColumn :place="PodiumPlace.First" :userName="username2" borderWidth="5px" borderColor="Red"/>
  <PodiumColumn :place="PodiumPlace.Third" :userName="username3" borderWidth="5px" borderColor="Red" />
</div>
</template>

<style scoped>
.podium {
  display: flex;
  justify-content: center;
}

</style>


