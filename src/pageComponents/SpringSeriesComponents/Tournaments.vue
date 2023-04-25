<template>
    <div class="mobileTournaments">
      <p class="tournamentTitle">ყოველდღიური ტურნირები და სატელიტები</p>
      <div class="tournamentsWrapper"> 
        <div class="tournament1wrapper holdemTournament">
          <div class="tournament1Details">
            <p class="tournament1Name holdemTournamentName">Holdem Highrollers</p>
            <p class="tournament1Prize holdemTournamentPrize">40 000ლ</p>
            <p class="tournament1Buy-in holdemTournament1Buy-in">ბაი-ინი XXXლ</p>
            <p class="Tournament1Date holdemTournamentDate">27 დეკემბერი</p>
          </div>
          <img class="tournament1 omahaTournamentIcon" src="../../assets/tournament-bg-m.png" alt="tournament">
          <img class="tournament1IconForDesktop" src="../../assets/tournament-bg2.png" alt="">
          
        </div>
        <div class="tournament1wrapper omahaTournament">
          <div class="tournament2Details">
            <p class="tournament1Name omahaTournamentName">Omaha Highrollers</p>
            <p class="tournament1Prize omahaTournamentPrize">40 000ლ</p>
            <p class="tournament1Buy-in omahaTournamentBuy-in">ბაი-ინი XXXლ</p>
            <p class="Tournament1Date omahaTournamentDate">27 დეკემბერი</p>
          </div>
          <img class="tournament1 holdemTournamentIcon" src="../../assets/tournament-bg-m.png" alt="tournament">
          <img class="tournament2IconForDesktop" src="../../assets/tournament-bg2.png" alt="">
        </div>
      </div>
      <div class="tournament1wrapper mainTournament">
        <div class="mainTournamentDetails">
          <p class="tournament1Name mainTournamentName">Main Events</p>
          <p class="tournament1Prize mainTournamentPrize">150 000ლ</p>
          <p class="tournament1Buy-in mainTournamentBuy-in">ბაი-ინი XXXლ</p>
          <p class="Tournament1Date mainTournamentDate">27 დეკემბერი</p>
        </div>
        <img class="tournament1 mainTournamentIcon" src="../../assets/main-bg-sm.png" alt="tournament">
        <img class="mainTournamentIconForDesktop" src="../../assets/main-bg.png" alt="mainTournament">
      </div>
       <div class="TournamentsInfoForDesktop">
          <p >* სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის მისაღებად.</p>
       </div>
    </div>
    <div class="TournamentsInfo">
      <p>* სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის მისაღებად.</p>
    </div>
    
     
</template>

<script setup>

</script>

<style scoped>
@media (min-width: 577px) {
  .TournamentsInfoForDesktop{
    color: #FFFFFF;
    font-size: 14pt;
    font-family: HelveticaNeue;
  }
  .TournamentsInfo{
    display: none;
  }

  .mainTournamentDate{
    font-size: 15pt;
    color: #094B3D;
    font-family: HelveticaNeue;
    font-weight: bold;
    top: 40%;
    right: 22%;
    background-color: #D7C860;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 20%;
    border-radius: 15pt;
    border-bottom-right-radius: 0;
  }
  .mainTournamentBuy-in{
    font-size: 14pt;
    color: #FFFFFF;
    top: 13%;
    right: 23%;
    font-family: HelveticaNeue;
    font-weight: bold;
  }
  .mainTournamentPrize{
    font-size: 23pt;
    color: #FFBE00;
    font-family: HelveticaNeue;
    font-weight: bold;
    top: 40%;
    left: 20%;
  }
  .mainTournamentName{
    font-size: 22pt;
    color: #FFFFFF;
    font-family: HelveticaNeue;
    top: 10%;
    left: 20%;
  }
  .mainTournament{
    position: relative;
  }
  .mainTournamentIconForDesktop{
    width: 100%;
  }
  .holdemTournamentDate, .omahaTournamentDate {
    top: 50%;
    right: 18%;
    font-size: 10pt;
    color: #FFFFFF;
    font-family: HelveticaNeue;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B78648;
    width: 30%;
    height: 25%;
    border-radius: 15pt;
    border-bottom-right-radius: 0;

  }
  .omahaTournamentBuy-in, .holdemTournament1Buy-in {
    top: 18%;
    right: 17%;
    font-size: 11pt;
    font-family: helveticaNeue;
    color: #FFFFFF;
  }
  .holdemTournamentPrize, .omahaTournamentPrize {
    top: 40%;
    left: 3%;
    font-size: 20pt;
    color: #FFBE00;
    font-family: helveticaNeue;
    font-weight: bold;
  }
  .tournament1IconForDesktop, .tournament2IconForDesktop {
    width: 100%;
  }

  .holdemTournamentIcon ,
  .omahaTournamentIcon,
   .mainTournamentIcon{
    display: none;
  }
   
  .holdemTournamentName, .omahaTournamentName{
    top: 15%;
    left: 3%;
    font-size: 14pt;
    color: #FFFFFF;
    font-family: HelveticaNeue;
  }
  .tournament1Details p , 
  .tournament2Details p,
  .mainTournamentDetails p{
    position: absolute;
    margin: 0px;
    padding: 0px;
  }
  .holdemTournament, .omahaTournament{
    position: relative;
  }
  
  .tournamentTitle{
    color: #FFFFFF;
    font-size: 18pt;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: November;
    font-weight: bold;
  }
  .tournamentsWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .mobileTournaments {
    margin: 2rem 3rem 2rem 3rem;
    background-color: #171718;
    border: 4pt solid #25292B;
    padding: 1rem;
    border-radius: 16pt;
  }

}

@media (max-width: 576px) {
  .TournamentsInfoForDesktop{
    display: none;
  }
  .TournamentsInfo{
    margin: 2rem 1rem 2rem 1rem;
    color: #FFFFFF;
    font-size: 14pt;
    font-family: HelveticaNeue;

  }
  .mainTournamentIconForDesktop, 
  .tournament2IconForDesktop,
  .tournament1IconForDesktop{
    display: none;
  }
  .mobileTournaments{
    margin: 2rem 1rem 2rem 1rem;
  }
  .tournament1, .tournament2, .tournament3 {
    width: 100%;
  }
  .tournamentTitle {
    color: #FFFFFF;
    font-size: 10pt;
    display: flex;
    justify-content: center;
  }
  .tournament1wrapper{
    position: relative;
    margin: 1rem 0;
  }
  .tournament1Details p , 
  .tournament2Details p,
  .mainTournamentDetails p{
    position: absolute;
    margin: 0px;
    padding: 0px
  }
  .tournament1Name {
    top: 15%;
    left: 5%;
    font-size: 12pt;
    color: #FFFFFF;
    font-family: HelveticaNeue;
  }
  .tournament1Prize{
    top: 45%;
    left: 5%;
    color: #FFBE00;
    font-size: 16pt;
    font-weight: bold;
  }
  .tournament1Buy-in {
    top: 20%;
    right: 20%;
    color: #FFFFFF;
    font-size: 10pt;
  }

  .Tournament1Date{
    top: 45%;
    right: 12%;
    background-color: #B78648;
    color: #FFFFFF;
    font-size: 12pt;
    width: 9rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15pt;
    border-bottom-right-radius: 0px;
  }

}

</style>