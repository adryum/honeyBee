<script>
import MessageList from "@/components/MessageList.vue";
import {JsonToArr} from "@/main.js";

export default {
  components: {MessageList},
  props: ['gameStats'],
  methods: {
    JsonToArr,
    sortStatsByScoreDESC(userArray) {
      return userArray.sort((userA, userB) => {return userB.score - userA.score})
    },
    sortStatsByScoreASC(userArray) {
      return userArray.sort((userA, userB) => {return userA.score - userB.score})
    },
    removeHighestScoresFromTop(arr, amount) {
      arr = this.sortStatsByScoreASC(arr)
      arr = arr.splice(0,amount)
      arr = this.sortStatsByScoreDESC(arr)
      return arr
    }
  }
}
</script>

<template>
<div class="wrapper">
  <div class="title"><strong>LeaderBoard</strong></div>
  <hr class="hr-horizontal">
  <div class="podium">

  </div>
  <div class="others">
    <MessageList :messages="removeHighestScoresFromTop(JsonToArr(gameStats, 'users'), 3)" chat-height="300px"/>
  </div>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.podium {
  flex: 1;
}
</style>
