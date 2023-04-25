<template>
  <div class="isSpringSeriesContainer">
    <BaseCard  class="topBaseCardSlot">
      <div class="topBaseCard"  >
       <span>მოხვდი TOP22 ლიდერბორდში</span>  
       <span>ტურნირებზე დაგროვებული</span>  
       <span>ქულებით</span> 
      </div>
    </BaseCard>
    <div class="leaderBoardContainer">
      <div>
        <div class="mechanicWrapper">ქულების დაგროვების მექანიკას <img src="../../assets/mechanic-icon.png" alt=""></div>
      </div>
      <TitleandTableWrapper></TitleandTableWrapper>
      <PrizeContainer></PrizeContainer>
      <div>
      <p class="leaderBoardResults">*ლიდერბორდის შედეგები განახლდება <a class="pokerLoby" href="">პოკერის ლობიში</a></p>
      </div>
      <div   class="leaderBoardScoresInfoContainer">
        <p class="leaderBoardScoresInfo">
          <div>* სატურნირო ლიდერბორდის ქულების</div>    
          <div>დათვლაში არ მონაწილეობს ფრიროლები</div>
          <div>და სატელიტები</div>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCard from '../../components/BaseCard.vue';
import TitleandTableWrapper from '../cashgameComponents/TitleandTableWrapper.vue';
import PrizeContainer from '../cashgameComponents/PrizeContainer.vue';

</script>

<style scoped>

.leaderBoardScoresInfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13pt;
  margin: 0.3rem ;
  font-family: November;
  color: #FFFFFF;
}

.pokerLoby{
  font-size: 13pt;
  color: #EF5A21;
}

.leaderBoardResults{
  color: #FFFFFF;
  font-size: 13pt;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mechanicWrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1E2122;
  border: 2pt solid #2C3234;
  border-radius: 76pt;
  margin: 2rem 1rem;
  padding-left: 1rem;
  font-size: 10pt;
  color: #FFFFFF;
  font-family: HelveticaNeue;
  font-weight: bold;
}
.topBaseCard{
  margin: 1rem;
  font-size: 14pt;
  font-family: HelveticaNeue;
  color: #FFFFFF;
}

.isSpringSeriesContainer {
  margin: 2rem 1rem 2rem 1rem;
  background-color: #25292B;
  border-radius: 16pt;
}

@media (max-width: 576px) {
  .topBaseCard{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  }
  .leaderBoardScoresInfoContainer{
    padding-bottom: 1.5rem;
  }
}

@media (min-width: 577px) {
  .isSpringSeriesContainer {
  margin: 2rem 3rem 2rem 3rem;
  }
  .topBaseCardSlot {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .topBaseCard {
    height: 3rem;
    display: flex;
    align-items: center;
  }

   .mechanicWrapper {
    margin: 2rem;
   }

  .leaderBoardContainer{
    background-color: #171718;
    padding-bottom: 2rem;
    padding-top: 2rem;
    border: 4pt solid #25292B;
    border-top: none;
    border-bottom-left-radius: 16pt;
    border-bottom-right-radius: 16pt;
  }
   
}

</style>