<template>
  <div>
    <BaseCard class="isTopBoxBaseCard"> <div class="isTopBox"  >1ლ რეიქი = 1 ქულას </div></BaseCard>
    <div class="isTableBox">main</div>
    <div class="isBottomBox">bottom</div>
  </div>
</template>

<script setup>
import BaseCard from '../components/BaseCard.vue';

</script>

<style scoped>
@media (max-width: 400px) {
  .isTopBoxBaseCard{
  height: 4rem;
}
}
@media (min-width: 401px) {
  .isTopBoxBaseCard{
  height: 4.5rem;
}
}
 
.isTopBox {
  color: white;
  font-size: 16pt;
  font-family: November GeLC;
  font-weight: bold;
}
</style>