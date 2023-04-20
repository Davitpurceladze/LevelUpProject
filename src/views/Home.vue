<template>
  <div class="main"> 
    <Header></Header>
    <NavBar></NavBar>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue';
</script>

<style scoped>
@media (min-width: 401px) {
.main {
  width: 70%;
  margin: 30px 15% 0;
}
}
</style>