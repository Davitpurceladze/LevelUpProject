<template>
  <div class="tabs">
    <div  class="tab " :class="{active: activeRoute === 'CashGame' }" @click="changeRoute('CashGame')">
      <div class="isDate">1-29 აპრილი</div>
      <div class="isName"> Cash Game</div>
    </div>
    <div class="tab" :class="{active: activeRoute === 'SpringSeries' }" @click="changeRoute('SpringSeries')">
      <div class="isDate">13-29 აპრილი</div>
      <div class="isName "> Spring Series</div>
    </div>
    <div class="tab" :class="{active: activeRoute === 'FinalStage' }" @click="changeRoute('FinalStage')">
      <div class="isDate">30 აპრილი</div>
      <div class="isName "> Final Stage</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, } from 'vue';

const activeRoute = ref('CashGame')
const router = useRouter()

const changeRoute = function(str){
    router.push(str)
    activeRoute.value = str
    localStorage.setItem('activeClass', str)

}

onMounted(() =>{
  let activeClass = localStorage.getItem('activeClass')
  activeRoute.value = activeClass
})

</script>

<style scoped>
@media (min-width: 577px) {
  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 3rem;
    height: 4.5rem;
    background-color: #2C3234;
    border-radius: 12pt;
    padding: 0 2rem;
  }
  .tab:hover {
    cursor: pointer;
  }
  .tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .isName{
    font-size: 14pt;
    color: #FFFFFF;
    opacity: 80%;
  }
  .isDate{
    font-size: 10pt;
    color: #FFFFFF;
    opacity: 80%;
    font-family: November Gelc;
    margin-left: 0.7rem;
  }
  .active {
    background-color: #EF5A21;
    transform: scaleY(1.2) scaleX(1.2);
    border-radius: 12pt;
    width: 35%;
    height: 90%;
  }
}

@media (max-width: 400px) {
  .active {
    background-color: #EF5A21;
    border-radius: 8pt;
  }
}

@media (min-width: 401px) and (max-width:576px){
  .active {
    background-color: #EF5A21;
    transform: scaleY(1.3) scaleX(1.2);
    border-radius: 8pt;
  }
}

@media (max-width: 576px) {
  .tab:hover {
    cursor: pointer;
  }
  .tab {
    padding: 0.8rem 0.8rem;
  }
  .isName{
    color: #FFFFFF;
    font-size: 12pt;
    font-family: HelveticaNeue;
    font-weight: bold;
  }
  .isDate {
    color: #FFFFFF;
    font-size: 10pt;
    font-family: HelveticaNeue LT;
    font-weight: lighter;
  }
  .tabs{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 1.5rem 1rem;
    height: 4.5rem;
    background-color: #2C3234;
    border-radius: 8pt;
  }
}
</style>