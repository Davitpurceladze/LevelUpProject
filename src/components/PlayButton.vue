<template>
  <div class="container">
    <div class="playButton" > <span >ითამაშე</span>  </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.playButton{
  background-color: #F05A22;
  color: #FFFFFF;
  height: 2rem;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5pt;
}
.container{
  background-color: #171718;
  border-top: 3pt solid #F05A22; 
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 576px){
  .container{
    width: 70%;
  }
}

</style>