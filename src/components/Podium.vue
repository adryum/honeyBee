<script>
import PodiumColumn from "@/components/PodiumColumn.vue";
import {PodiumPlace} from "@/main.js";
export default {
  components: {PodiumColumn},
  props: ['gameScore'],
  computed: {
    PodiumPlace() {
      return PodiumPlace
    },
  },
  methods: {
    logus() {
      console.log(this.gameScore)

    }
  }
}

</script>

<template>
<div class="podium">
  <button @click="logus" ></button>
  <PodiumColumn
    :place="PodiumPlace.Second"
    :userName="gameScore[1].username"
    borderWidth="5px"
    :borderColor="gameScore[1].borderColor"
    :userScore="gameScore[1].score"
  />
  <PodiumColumn
    :place="PodiumPlace.First"
    :userName="gameScore[0].username"
    borderWidth="5px"
    :borderColor="gameScore[0].borderColor"
    :userScore="gameScore[0].score"
  />
  <PodiumColumn
    :place="PodiumPlace.Third"
    :userName="gameScore[2].username"
    borderWidth="5px"
    :borderColor="gameScore[2].borderColor"
    :userScore="gameScore[2].score"
  />
</div>
</template>

<style scoped>
.podium {
  display: flex;
  justify-content: center;
}

</style>


