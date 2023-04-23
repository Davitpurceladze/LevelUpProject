<template>
   <div class="isRulesContainer">
    <div class="isRulesTitle">წესები და პირობები</div>
    <div class="isRules">
      <div class="rule1" @click="showRule(1)">როდის იწყება და რა ფორმატით გაიმართება აქცია  <img class="isArrow" :class="{'rotateUp' : isRotate1,'rotateDown' : !isRotate1} "   src="../assets/arrow-down.png" alt="ArrowIcon"></div>
      <p v-if="(ruleN1)">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div class="rule2" @click="showRule(2)">როგორ მივიღო აქციაში მონაწილეოა <img class="isArrow" :class="{'rotateUp' : isRotate2,'rotateDown' : !isRotate2} " src="../assets/arrow-down.png" alt="ArrowIcon"></div>
      <p v-if="(ruleN2)">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div class="rule3" @click="showRule(3)">სხვადასხვა <img class="isArrow" :class="{'rotateUp' : isRotate3,'rotateDown' : !isRotate3} " src="../assets/arrow-down.png" alt="ArrowIcon"></div>
      <p v-if="(ruleN3)">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
   </div>
</template>

<script setup>
import {ref} from 'vue'

let ruleN1 = ref(false)
let ruleN2 = ref(false)
let ruleN3 = ref(false)
let isRotate1 = ref(false)
let isRotate2 = ref(false)
let isRotate3 = ref(false)



function showRule(n) {
  switch(n) {
    case 1:
      ruleN1.value = !ruleN1.value;
      isRotate1.value = !isRotate1.value
      break
    case 2:
      ruleN2.value = !ruleN2.value;
      isRotate2.value = !isRotate2.value
      break
    case 3:
      ruleN3.value = !ruleN3.value;
      isRotate3.value = !isRotate3.value
      break
  }
}

</script>

<style scoped>
.rotateUp {
  transform: rotate(180deg);
  transition: transform 0.5s ease-in;
}
.rotateDown {
  transform: rotate(0deg);
  transition: transform 0.5s ease-in;
}
.isRules p {
  color: #BBBBBB;
  margin: 0.5rem 1rem;
  font-family: HelveticaNeue;
  font-size: 12;
}
.rule1, .rule2, .rule3:hover {
  cursor: pointer;
}
.isArrow {
  height: 1rem;
  width: 1.3rem;
}
.rule1, .rule2, .rule3{
  font-family: HelveticaNeue;
  font-size: 14pt;
  color: #BBBBBB;
  background-color: #25292B;
  margin: 0.5rem 0;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12pt;
}
.isRulesTitle {
  font-size: 16pt;
  font-family: HelveticaNeue;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
}
.isRulesContainer{
  margin: 2rem 1rem 2rem 1rem
}

@media (min-width: 401px) {
  .isRulesContainer{
    margin: 2rem 3rem 2rem 3rem
  }
  .rule1, .rule2, .rule3 {
    height: 4rem;
  }
}

</style>

