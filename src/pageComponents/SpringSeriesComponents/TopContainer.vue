<template>
  <BaseCard class="isBaseCard">
    <div class="cardWrapper">
      <div class="isTitle">ტურნირები და სატელიტები</div>

      <div> 
        <div class="imgWrapper">
          <div class="imgTitle">
            <div class="imgTitle1">სერიის ფარგლებში, ყოველდღიურად</div>
            <div class="imgTitle2">გაიმართება 3 ივენთი:</div>  
          </div>
          <div class="isImage">
            <img class="cardIconLeft" src="../../assets/promo-left-img.png" alt="leftIcon">
            <img class="isTournamentTime" src="../../assets/tournamentTime.40eae8e5.png" alt="tournamentTime">
            <img class="cardIconRight" src="../../assets/promo-right-img.png" alt="rightIcon">
          </div>
        </div>
        <div class="isInfo">
          <div>* ყველა ტურნირზე მოხვედრა შესაძლებელია</div>
          <div class="isInfo1">0 ლარიდან.</div>
          <div>ტურნირების სრული განრიგის სანახავად</div>
          <div class="isInfo2">გადადი პოკერის ლობიში</div>
          <div class="isPokerLoby">პოკერის ლობი</div>
        </div>
      </div>


    </div>

    
    <div class="cardWrapperForDesktop">
      <div class="isTitleDesktop">ტურნირები და სატელიტები</div>
      <div class="wrapperContainer"> 
      <img class="hiddenIconLeft" src="../../assets/promo-left-img.png" alt="leftIcon">
      
      <div> 
        <div class="imgWrapper">
          <div class="imgTitle">
            <div class="imgTitle1">სერიის ფარგლებში, ყოველდღიურად</div>
            <div class="imgTitle2">გაიმართება 3 ივენთი:</div>  
          </div>
          <div class="isImage">
            <img class="isTournamentTime" src="../../assets/tournamentTime.40eae8e5.png" alt="tournamentTime">
          </div>
        </div>
        <div class="isInfo">
          <div>* ყველა ტურნირზე მოხვედრა შესაძლებელია</div>
          <div class="isInfo1">0 ლარიდან.</div>
          <div>ტურნირების სრული განრიგის სანახავად</div>
          <div class="isInfo2">გადადი პოკერის ლობიში</div>
          <div class="isPokerLoby">პოკერის ლობი</div>
        </div>
      </div>
      <img  class="hiddenIconRight" src="../../assets/promo-right-img.png" alt="rightIcon">
      </div>
    </div>
     

  </BaseCard>
</template>

<script setup>
import BaseCard from '../../components/BaseCard.vue';
</script>

<style scoped>
.isPokerLoby {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F05A22;
  padding: 0.5rem;
  border-radius: 5pt;
  margin: 0;
  font-size: 15pt;
  font-family: HelveticaNeue;
}
.isInfo1, .isInfo2 {
  margin-bottom: 1rem;
}
.isInfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12pt;
  font-family: HelveticaNeue;
  color: #FFFFFF;
  margin: 1rem 0
}

.isTournamentTime{
  height: 3rem;
}

.imgTitle1, .imgTitle2 {
  display: flex;
  justify-content: center;
  margin: 0.3rem 0.2rem;
}
.imgTitle{
  color: #FFFFFF;
  font-size: 13pt;
  font-family: November Gelc;
  font-weight: bold;
}
.imgWrapper{
  margin: 0.5rem 0;
  padding: 1rem 0 0 0 ;
  background-color: #171718;
}
.cardIconLeft {
  width: 6rem;
  margin-left: 0px;
}

.cardIconRight {
  width: 6rem;
  margin-right: 0px;
}
.isImage {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.cardWrapper{
  width: 100%;
}

.isTitle{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  font-size: 16pt;
  color: #FFFFFF;
  font-family: November;
}

.isBaseCard {
  margin: 2rem 1rem 2rem 1rem ;
  
}

 @media (max-width: 410px)   {
  .cardIconLeft, .cardIconRight {
    width: 4rem;
  }

  .imgTitle, .isInfo {
    font-size: 10pt;
  }

}  
@media (max-width: 576px) {
  .cardWrapperForDesktop {
    display: none;
  }
}


@media (min-width: 577px) {
  .isBaseCard {
    margin: 2rem 3rem 2rem 3rem ;
  }
  .cardWrapper{
    display: none;
  }
  
  .hiddenIconLeft, .hiddenIconRight {
    height: 8rem;
  }

  .isTitleDesktop{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    font-size: 16pt;
    color: #FFFFFF;
  }

  .wrapperContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    background-color: #171718;
    border: 4pt solid #25292B;
    box-sizing: border-box;
    border-radius: 16pt;
  }
  .cardWrapperForDesktop {
    width: 100%;
  }

  .isImage{
    display: flex;
    justify-content: center;
  }
}

</style>