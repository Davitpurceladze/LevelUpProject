<template>
  <div class="item">
    <div class="itemNumber"><p>1</p></div>
    <div class="itemPrize"><p>1500</p></div>
    <div class="itemCategory"> <p>A კატეგორიის საგზური</p></div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #1E2122;
  /* margin: 0.7rem; */
  height: 3rem;
  border: 2pt solid #2C3234;
  border-radius: 12pt;
}

.itemNumber {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2C3234;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-left: 10%;
  color: white;
  font-size: 10pt;
  font-family: November GeLC;
  font-weight: bold;
}

.itemPrize {
  margin-left: 25%;
  color: white;
  font-family: November GeLC;
  font-weight: bold;
  font-size: 10pt;
}

.itemCategory {
  margin-left: 10%;
  font-size: 10pt;
  color: white;
  font-family: November GeLC;
}

@media (min-width: 576px) {
  .itemPrize {
    margin-left: 35%;
  }
  .itemCategory {
    margin-left: 25%;
  }
}
 


</style>