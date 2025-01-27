<script>
import MessageList from "@/components/MessageList.vue";
import {JsonToArr} from "@/main.js";
import Podium from "@/components/Podium.vue";

export default {
  components: {Podium, MessageList},
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
  <Podium username1="the1" username2="the2" username3="the3"/>
  <hr class="separator">
  <div class="others">
    <MessageList :messages="removeHighestScoresFromTop(JsonToArr(gameStats, 'users'), 3)" chat-height="200px"/>
  </div>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  background: var(--dark-color-background);

}
.separator {
  margin: 0;
  align-self: center;
  height: 2px;
  width: 70%;
  background: white;
}
</style>
