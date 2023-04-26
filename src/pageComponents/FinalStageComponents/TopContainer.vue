<template>

<div class="mainContainer">
    <div class="topContainer">
      <div class="topContainerImg">
        <img class="backgroundImg" src="../../assets/final-info-img.d5eff366.jpg" alt="backgroundImg">
      </div>
      <div class="topContainerDescription">
        <p>გაემგზავრე The Festival in Malta-ზე!</p>
        <p>The Festival Series ტურნირების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.</p>
      </div>
      <div class="topContrainerFestivalWrapper" >
        <PrizeCard class="topContainerFestivalInfo">
          <p class="topContainerFestivalText">15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს</p>
        </PrizeCard>
      </div>
      <div class="travelCategoriesWrapper">
        <div class="categoryA">
          <div class="travelBaseCard" >
            <hr class="line">
            <p class="travelCategorieTitle">A კატეგორიის საგზურში შედის</p>
          </div>
          <div class="travelIncludes">
            <div class="travelIncludesItem">
              <img class="travelIcon" src="../../assets/final-item-ticket-icon.png" alt="ticket"> 
                <span class="travelDetail1">  ორმხრივი ავიაბილეთი</span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon" src="../../assets/final-item-hotel-icon.png" alt="ticket">   
                <span class="travelDetail2">  The Festival in Malta -ს მეინ ივენთის ბაი-ინი  </span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon" src="../../assets/final-item-event-icon.png" alt="ticket">   
                <span class="travelDetail3">  Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი  </span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon"  src="../../assets/final-item-ticket-icon.png" alt="ticket">   
                <span class="travelDetail4">  სასტუმრო  </span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon"  src="../../assets/final-item-ticket-icon.png" alt="ticket">   
                <span class="travelDetail4">  €500 სახარჯი ფული  </span>
            </div>
          </div>
          
        </div>
        <div class="categoryA">
          <div class="travelBaseCard">
            <hr class="line">
            <p class="travelCategorieTitle">A კატეგორიის საგზურში შედის</p>
          </div>
          <div class="travelIncludes">
            <div class="travelIncludesItem">
              <img class="travelIcon" src="../../assets/final-item-ticket-icon.png" alt="ticket"> 
                <span class="travelDetail1">  ორმხრივი ავიაბილეთი</span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon" src="../../assets/final-item-hotel-icon.png" alt="ticket">   
                <span class="travelDetail2">  The Festival in Malta -ს მეინ ივენთის ბაი-ინი  </span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon" src="../../assets/final-item-event-icon.png" alt="ticket">   
                <span class="travelDetail3">  Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი  </span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon"  src="../../assets/final-item-ticket-icon.png" alt="ticket">   
                <span class="travelDetail4">  სასტუმრო  </span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon"  src="../../assets/final-item-ticket-icon.png" alt="ticket">   
                <span class="travelDetail4">  €500 სახარჯი ფული  </span>
            </div>
          </div>
          
        </div>
        <div class="categoryA">
          <div class="travelBaseCard">
            <hr class="line">
            <p class="travelCategorieTitle">A კატეგორიის საგზურში შედის</p>
          </div>
          <div class="travelIncludes">
            <div class="travelIncludesItem">
              <img class="travelIcon" src="../../assets/final-item-ticket-icon.png" alt="ticket"> 
                <span class="travelDetail1">  ორმხრივი ავიაბილეთი</span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon" src="../../assets/final-item-hotel-icon.png" alt="ticket">   
                <span class="travelDetail2">  The Festival in Malta -ს მეინ ივენთის ბაი-ინი  </span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon" src="../../assets/final-item-event-icon.png" alt="ticket">   
                <span class="travelDetail3">  Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი  </span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon"  src="../../assets/final-item-ticket-icon.png" alt="ticket">   
                <span class="travelDetail4">  სასტუმრო  </span>
            </div>
            <div class="travelIncludesItem">
              <img class="travelIcon"  src="../../assets/final-item-ticket-icon.png" alt="ticket">   
                <span class="travelDetail4">  €500 სახარჯი ფული  </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
     
  </div>
</template>

<script setup>
import PrizeCard from '../../components/PrizeCard.vue';

</script>

<style scoped>
.line{
  position: absolute;
  display: flex;
  align-self: flex-start;
  height: 4px;
  margin: 0px;
  background-color: #EF5A21;
  width: 30%;
  border: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 0 10px #EF5A21;
}
.travelBaseCard{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16pt;
  background-color: #2C3234;
}
.categoryA{
  margin: 2rem 0;
}
.travelDetail4{
  position: absolute;
  top: 35%;
  left: 25%;
}
.travelDetail3{
  position: absolute;
  top: 10%;
  left: 25%;
}
.travelDetail2{
  position: absolute;
  top: 20%;
  left: 25%;
}

.travelDetail1{
  position: absolute;
  top: 35%;
  left: 25%;
}
 
.travelIcon{
  position: absolute;
  top: 25%;
  left: 5%;
}
.travelIncludesItem{
  position: relative;
  background-color: #1C1D1E;
  height: 4rem;
  width: 80%;
  margin: 0.5rem;
  border-radius: 10pt;
  font-size: 11pt;
  color: #FFFFFF;
}
.travelIncludes{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25292B;
  border-bottom-left-radius: 14pt;
  border-bottom-right-radius: 14pt;
}

.travelBaseCard{
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

}
.travelCategorieTitle {
  font-size: 12pt;
  color:#FFFFFF;
}

.travelCategoriesWrapper{
  margin: 2rem 1rem
}
.topContainerFestivalText{
  color: #FFFFFF;
  margin: 1rem;
  font-size: 11pt;
  font-family: HelveticaNeue;
}
.topContainerDescription{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  font-size: 12pt;
  color: #FFFFFF;
}
.backgroundImg{
  border-radius: 16pt;
  width: 100%;
}
.topContainerImg{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 1rem ;
}
.topContainer{
  background-color: #171718;
  border: 4pt solid #25292B;
  border-radius: 16pt;
}
.mainContainer {
  margin: 2rem 1rem 2rem 1rem;
}

@media (min-width: 576px) {
  .topContrainerFestivalWrapper{
    display: flex;
    justify-content: center;
  }
  .topContainerFestivalInfo{
    width: 80%;
  }
  .topContainerFestivalText{
    font-size: 15pt;

  }
  .mainContainer {
    margin: 2rem 3rem 2rem 3rem
  }
  .travelCategoriesWrapper{
    margin: 2rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .line{
    width: 10%;
  }
   
}
</style>