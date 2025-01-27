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
      let newArr = arr.splice(0,amount)
      newArr = this.sortStatsByScoreDESC(newArr)
      return newArr
    }
  }
}
</script>

<template>
<div class="wrapper">
  <div class="title"><strong>LeaderBoard</strong></div>
  <hr class="hr-horizontal">
  <Podium :gameScore="sortStatsByScoreASC(JsonToArr(gameStats, 'users'))"/>
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
