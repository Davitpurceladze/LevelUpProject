<template>
  <div>
    <LeaderBoard></LeaderBoard>
    <BaseCard class="isTournamentInfo">
      <div class="isTournamentParagraph">
        <p class="isMainInfo">დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side ლიდერბორდი</p>
        <p class="isSideInfo">* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.</p>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import LeaderBoard from '../pageComponents/cashgameComponents/LeaderBoard.vue'
import BaseCard from '../components/BaseCard.vue';
</script>

<style scoped>
.isTournamentInfo {
  margin: 2rem 1rem 2rem 1rem;
}
 
.isTournamentParagraph {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

.isMainInfo {
  font-size: 16pt;
  font-family: November GeLC;
  font-weight: bold;
  color: #FFFFFF;
}

.isSideInfo {
  font-size: 12pt;
  color: #FFFFFF;
  font-family: HelveticaNeue ;
}

 
@media (min-width: 577px) {
  .isTournamentInfo {
    margin: 2rem 3rem 2rem 3rem;
  }
}
 
</style>