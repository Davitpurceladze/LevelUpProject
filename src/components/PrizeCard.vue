<template>
  <div class="prize-card">
    <hr class="prize-line">
      <slot></slot>
  </div>
</template>


<script setup>

 
</script>

<style scoped>

.prize-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #2C3234;
  margin: 0.5rem 1rem;
  height: 5rem;
  border-radius: 14pt
}

.prize-line {
  position:absolute;
  display: flex;
  width: 0.25rem;
  height: 1.8rem;
  background-color: #EF5A21;
  border: none;
  border-bottom-right-radius: 4pt;
  border-top-right-radius: 4pt;
  box-shadow: 0 0 10px #EF5A21;
}
</style>