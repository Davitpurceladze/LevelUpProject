<template>
  <div class="mainContainer">
    <div>
      <BaseCard class="keyBaseCard">
        <div class="keyWrapper">
          <img class="keyIcon" src="../../assets/key-ka.4d5e33e0.png" alt="key">
        </div>
      </BaseCard>
    </div>
    <div class="leaderBoardWrapper">
        <div class="leaderBoardItem" v-for="i in 20">
          <div class="leaderBoardItemNumber">1</div>
          <div class="leaderBoardItemText">სპეციალური ტურნირი Cashgame Sharks II ადგილი</div>
        </div>
    </div>
  </div>
</template>

<script setup>
import BaseCard from '../../components/BaseCard.vue';

</script>

<style scoped>
.leaderBoardItemText{
  font-size: 12pt;
  position: absolute;
  left: 18%;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
.leaderBoardItemNumber{
  font-size: 10pt;
  font-family: November;
  position: absolute;
  color: #FFFFFF;
  left: 7%;
  background-color: #2C3234;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.leaderBoardItem{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1E2122;
  border: 2pt solid #2C3234;
  border-radius: 76pt;
  margin: 1rem 0;
  height: 4rem;
  padding: 0 1rem ;
  position: relative;
   
}
.leaderBoardWrapper{
  margin: 1rem;
  height: 27rem;
  position: relative;
  overflow: auto;
}
.keyWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.keyBaseCard{
  height: 4rem;
}
.keyIcon{
  width: 90%;
}
.mainContainer{
  margin: 2rem 1rem 2rem 1rem;
  background-color: #25292B;
  border-radius: 14pt;
  height: 35rem;
}

@media (min-width: 576px) {
  .mainContainer{
  margin: 2rem 3rem 2rem 3rem;
  }

  .leaderBoardItemNumber{
    left: 20%;
  }

  .leaderBoardItemText{
    left: 30%;
  }
}

</style>