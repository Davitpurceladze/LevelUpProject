<template>
  <div class="main"> 
    <Header></Header>
    <NavBar></NavBar>
    <RouterView></RouterView>
    <Rules></Rules>
    <Carousel></Carousel>
    <PlayButton></PlayButton>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue';
import Rules from '../components/Rules.vue'
import Carousel from '../components/Carousel.vue';
import PlayButton from '../components/PlayButton.vue';
</script>

<style scoped>
.main {
  margin-bottom: 4rem;
}
@media (min-width: 577px) {
.main {
  width: 70%;
  margin: 30px 15% 4rem;
}
}
</style>