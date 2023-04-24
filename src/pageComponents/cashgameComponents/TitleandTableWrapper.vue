<template>
  <div class="TitleAndTableWrapper"> 
    <div class="bodyTitle">
      <div>ადგილი</div>
      <div class="bodyTitle-voucher"> <img class="bodyTitle-voucher-img" src="../../assets/gift.png" alt="gift"  ><span>ვაუჩერი</span> </div>
      <div>პრიზი</div>
    </div>
    <div class="table-items"   >
      <TableItem class="table-item" v-for="i in 20" ></TableItem>
    </div>
  </div>
</template>


<script setup>
import TableItem from '../../components/TableItem.vue'

</script>

<style scoped>
.table-item {
  position:relative;
  margin: 0.3rem 1rem 0.3rem 1rem;
}
 
.table-items {
  position: relative;
  height: 22rem;
  overflow: auto;
}

.bodyTitle {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #7D7D7D;
  font-family: November GeLC;
  font-size: 12pt;
  height: 2rem;
}

.bodyTitle-voucher {
  display: flex;
  align-items: center;
}

.bodyTitle-voucher-img {
  margin-right: 0.3rem;
}

@media (min-width: 577px) {
  .TitleAndTableWrapper{
    margin: 0rem 1.5rem 1rem 1.5rem;
    background-color: #25292B;
    border-radius: 12pt;
  }
  .bodyTitle {
    height: 3rem;
  }
}
</style>

