<template>
  <div class="isCarouselContainer">
    <div class="carouselTitle">მსგავსი აქციები</div>
    <carousel   :wrap-around="true" :breakpoints="breakpoint" >
      <slide v-for="slide in 1" :key="slide">
        <div class="carousel__item">
          <div class="carouselDiv1"></div>
          <img class="carousel1" src="../assets/carousel1.png" alt="carousel1">
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="carousel__item">
          <div class="carouselDiv3"></div>
          <img class="carousel3" src="../assets/carousel3.png" alt="carousel3">
        </div>
      </slide>
    </carousel>
  </div>

</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide,  Navigation} from 'vue3-carousel'
import {ref} from 'vue'

let breakpoint = ref({
  400: {
    itemsToShow: 2.1,
  },
  700: {
    itemsToShow: 2.5
  },
  1000: {
    itemsToShow: 4

  },
  1400: {
    itemsToShow: 5
  }
})


  

</script>

<style scoped>
.carouselTitle{
  margin:1rem;
  color: #FFFFFF;
  font-size: 18pt;
}
 
.carousel__item {
  height: 180px;
  width: 150px;
  display: flex;
}
 
.carouselDiv3 {
  position: absolute;
  bottom: 0;
  height: 35%;
  width: 154.1px;
  background: linear-gradient(to top, #1A176C, #1A176C99,#1A176C00);
}
.carouselDiv1 {
  position: absolute;
  bottom: 0;
  height: 35%;
  width: 154.1px;
  background: linear-gradient(to top, #0D649B, #0D649BE8, #0D649B00);
}
.isCarouselContainer {
  margin: 2rem 1rem 2rem 1rem;
}   

@media (min-width: 576px) {
  .isCarouselContainer {
    margin: 2rem 3rem 2rem 3rem

  }
}
</style>