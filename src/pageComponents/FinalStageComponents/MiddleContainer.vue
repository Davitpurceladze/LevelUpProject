<template>
  <div class="mainContainer">
      <BaseCard  >
        <p class="titleText">მოიგე საგზური 30 აპრილის ტურნირებზე</p>
      </BaseCard>
      <div class="mainContentWrapper">
        <div class="mediumBoxWraper">
          <div class="mediumBox">
            <p class="mediumBoxName">„Holdem Grinders”</p>
            <p class="mediumBoxPrize">C კატეგორიის 1 საგზური</p>
            <img class="ticketIcon" src="../../assets/poker-item-1-ticket-icon.png" alt="pokerTicket">
          </div>
          <div class="mediumBox">
            <p class="mediumBoxName">“Cashgame Sharks”</p>
            <p class="mediumBoxPrize">C კატეგორიის 1 საგზური</p>
            <img class="ticketIcon" src="../../assets/poker-item-1-ticket-icon.png" alt="pokerTicket">
          </div>
          <div class="mediumBox">
            <p class="mediumBoxName">„Holdem Grinders”</p>
            <p class="mediumBoxPrize">C კატეგორიის 1 საგზური</p>
            <img class="ticketIcon" src="../../assets/poker-item-1-ticket-icon.png" alt="pokerTicket">
          </div>
        </div>
        <div class="largeBoxWrapper">
          <div class="largeBox">
            <p class="largeBoxP1">„The Festival in Malta, GTD“</p>
            <p class="largeBoxP2">B კატეგორიის 1 საგზური</p>
            <p class="largeBoxP3">C კატეგორიის 1 საგზური</p>
            <p class="largeBoxP4">*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165ლ ბაი-ინის გადახდით.</p>
            <img class="largeBoxIcon" src="../../assets/poker-item-2-ticket-icon.png" alt="ticket">
          </div>
          <div class="largeBox">
            <p class="largeBoxP1">„The Festival in Malta, GTD“</p>
            <p class="largeBoxP3">C კატეგორიის 1 საგზური</p>
            <p class="largeBoxP4">*ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის მფლობელები.</p>
            <img class="largeBoxIcon" src="../../assets/poker-item-2-ticket-icon.png" alt="ticket">
          </div>
        </div>
      </div>
    </div>
 
</template>

<script setup>
import BaseCard from '../../components/BaseCard.vue';
</script>

<style scoped>
 
.largeBoxIcon{
  position: absolute;
  right: 3%;
}
.largeBoxP4{
  color: #FFFFFF;
  margin: 0;
  top: 60%;
  left: 3%;
  font-size: 10pt;
}
.largeBoxP3{
  color: #FFFFFF;
  margin: 0;
  top: 35%;
  left: 3%;
  font-size: 10pt;
}
.largeBoxP2{
  color: #FFFFFF;
  margin: 0;
  top: 22%;
  left: 3%;
  font-size: 10pt;
}
.largeBoxP1{
  color: #FFFFFF;
  margin: 0;
  top: 8%;
  left: 3%;
  font-size: 10pt;
  font-weight: bold;
}

.largeBoxP1,
.largeBoxP2,
.largeBoxP3,
.largeBoxP4 {
  position: absolute;
}
.largeBox{
  margin: 1.5rem;
  height: 9rem;
  background-color: #1E2122;
  position: relative;
  border-radius: 12pt;

}
.ticketIcon{
  position: absolute;
  right: 3%;
  top: 0;
}
.mediumBoxPrize{
  position: absolute;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
  top: 50%;
  left: 5%;
  font-family: HelveticaNeue;
  font-size: 13pt;
}
.mediumBoxName{
  position: absolute;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
  top: 10%;
  left: 5%;
  font-size: 15pt;
}
 .mediumBox{
  background-color: #1E2122;
  position: relative;
  margin: 1.5rem;
  height: 5rem;
  width: auto;
  border-radius: 12pt;
 }
.mainContainer {
  margin: 2rem 1rem 2rem 1rem;
  background-color: #25292B;
  border-radius: 14pt;
  padding-bottom: 1.5rem;

}
.titleText {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  margin: 0.5rem;
  font-size: 11pt;
  height: 3rem;
  
}

@media (min-width:577px) {
  .mainContainer {
  margin: 2rem 3rem 2rem 3rem;
  }
  
   

}
</style>