<template>
  <div class="card"  >
    <hr class="line">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style scoped>

.line {
  position: absolute;
  display: flex;
  align-self: flex-start;
  height: 4px;
  margin: 0px;
  background-color: #EF5A21;
  width: 30%;
  border: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 0 10px #EF5A21;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16pt;
  background-color: #2C3234;
}
</style>