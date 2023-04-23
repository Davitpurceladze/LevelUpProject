<template>
  <div class="prize-container">
    <div class="prize-wrapper">
      <PrizeCard>
        <div class="prize-img"><img src="../../assets/travel-icon-sm.png" alt="prizeLogoTravel"></div>
        <div class="prize-text">The Festival in Malta-ს საგზური </div>
      </PrizeCard>
    </div>
    <div class="prize-wrapper">
      <PrizeCard>
        <div class="prize-img"><img src="../../assets/ticket-icon-sm.png" alt="prizeLogoTiket"></div>
        <div class="prize-text">სპეციალური ტურნირის "CashGame Sharks" ბილეთები, სადაც გათამაშდება The Festival in Malta-ს საგზური </div>
      </PrizeCard>
    </div>
    <div class="prize-wrapper">
      <PrizeCard>
        <div class="prize-img"><img src="../../assets/prize-gift.png" alt="prizeGift"></div>
        <div class="prize-text">"ალტას ვაუჩერი"</div>
      </PrizeCard>
    </div>
  </div>
</template>

<script setup>
import PrizeCard from '../../components/PrizeCard.vue'

</script>

<style scoped>
.prize-container{
  margin: 2rem 0;
}
.prize-img {
  margin-left:1.5rem
}
.prize-text {
  display: flex;
  margin: 1rem;
  font-size: 11pt;
  font-family: November GeLC;
  color: #FFFFFF;
}
 

@media (min-width: 401px){
  .prize-container {
    transform: scaleX(0.9) scaleY(0.9);
    background-color: #25292B;
    margin: 0 -1.4rem;
    padding: 1rem;
    border-radius: 12pt;
  }
}

</style>