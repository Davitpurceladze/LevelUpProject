<template>
  <div class="isCashGameContainer"  > 
    <BaseCard class="isTopBoxBaseCard"> <div class="isTopBox"  >1ლ რეიქი = 1 ქულას </div></BaseCard>
    <div class="isLeaderBox">
      <p>Top20 ლიდერბორდი ჰოლდემში</p>
      <div class="isLeaderBox-icon"><img src="../../assets/example-icon.png" alt="example-icon"></div>
    </div>
    <div class="isBody" >
      <TitleandTableWrapper></TitleandTableWrapper>
      <PrizeContainer></PrizeContainer>
      <div class="isSecondLeaderBox ">
        <p>Top20 ლიდერბორდი ჰოლდემში</p>
        <div class="isLeaderBox-icon"><img src="../../assets/example-icon.png" alt="example-icon"></div>
      </div>
      <TitleandTableWrapper></TitleandTableWrapper>
      <PrizeContainer></PrizeContainer>
      <div class="isPokerLoby">
        <p>* ლიდერბორდის შედეგები განახლდება <a class="isLoby" href="/">პოკერის ლობიში</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCard from '../../components/BaseCard.vue';
import TitleandTableWrapper from './TitleandTableWrapper.vue';
import PrizeContainer from './PrizeContainer.vue'
 
</script>

<style scoped>
/* poker loby */
.isPokerLoby{
  font-size: 13pt;
  color: #FFFFFF;
}
.isLoby {
  color: #EF5A21;
}


/* leaderboard title */
.isLeaderBox, .isSecondLeaderBox {
  color:#FFFFFF;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.isLeaderBox, .isSecondLeaderBox p {
  font-size: 13pt;
  font-family: HelveticaNeue ;
  font-weight: bold;
}
.isLeaderBox-icon {
  margin-left: 0.6rem;
}


/* top baseCard */
.isTopBox {
  color: white;
  font-size: 16pt;
  font-family: November GeLC;
  font-weight: bold;
}


/* main container */
.isCashGameContainer {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #25292B;
  margin: 2rem 1rem 2rem 1rem ;
  border-radius: 16pt;
}

@media (max-width: 576px) {
  .isTopBoxBaseCard{
  height: 4rem;
  }
}

@media (min-width: 577px) {
  .isLeaderBox, .isBody {
  border-right: 4pt solid;
  border-left: 4pt solid;
  border-color: #25292B;
  }
  .isBody {
  border-bottom: 4px solid;
  border-color: #25292B;
  border-bottom-left-radius: 16pt;
  border-bottom-right-radius: 16pt;
  }
  .isCashGameContainer {
  background-color: #171718;
  margin: 2rem 3rem 2rem 3rem ;
  }
  .isTopBoxBaseCard{
  height: 4.5rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  }
}
</style>