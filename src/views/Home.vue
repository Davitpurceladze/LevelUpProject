<template>
  <div class="main"> 
    <Header></Header>
    <NavBar></NavBar>
    <RouterView></RouterView>
    <Rules></Rules>
    <Carousel></Carousel>

  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue';
import Rules from '../components/Rules.vue'
import Carousel from '../components/Carousel.vue';
</script>

<style scoped>
@media (min-width: 577px) {
.main {
  width: 70%;
  margin: 30px 15% 0;
}
}
</style>