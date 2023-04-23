<template>
  <div class="isCashGameContainer"> 
    <BaseCard class="isTopBoxBaseCard"> <div class="isTopBox"  >1ლ რეიქი = 1 ქულას </div></BaseCard>
    <div class="isLeaderBox">
      <p>Top20 ლიდერბორდი ჰოლდემში</p>
      <div class="isLeaderBox-icon"><img src="../../assets/example-icon.png" alt="example-icon"></div>
    </div>
    <div class="isBody">
      <div class="TitleAndTableWrapper"> 
        <div class="bodyTitle">
          <div>ადგილი</div>
          <div class="bodyTitle-voucher"> <img class="bodyTitle-voucher-img" src="../../assets/gift.png" alt="gift"  ><span>ვაუჩერი</span> </div>
          <div>პრიზი</div>
        </div>
        <div class="table-items"   >
            <TableItem class="table-item" v-for="i in 20" ></TableItem>
        </div>
        <div>some divs</div>
        <div>some divs</div>
        <div>some divs</div>

      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCard from '../../components/BaseCard.vue';
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
.isTopBox {
  color: white;
  font-size: 16pt;
  font-family: November GeLC;
  font-weight: bold;
}
  .isCashGameContainer {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #25292B;
  margin: 2rem 1rem 2rem 1rem ;
  border-radius: 16pt;
}
.isLeaderBox{
  color:#FFFFFF;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.isLeaderBox-icon {
  margin-left: 0.6rem;
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

@media (max-width: 400px) {
  .isTopBoxBaseCard{
  height: 4rem;
  }
}

@media (min-width: 401px) {
  .isLeaderBox, .isBody {
    border-right: 4pt solid;
  border-left: 4pt solid;
  border-color: #25292B;
  }
  .isBody {
  border-bottom: 4px solid;
  border-color: #25292B;
  border-bottom-left-radius: 16pt;
  border-bottom-right-radius: 16pt;
  }
  .isCashGameContainer {
  background-color: #171718;
  margin: 2rem 3rem 2rem 3rem ;
  }
  .isTopBoxBaseCard{
  height: 4.5rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  }
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