<template>
<header>
    <div class="sign-in">
      <img src="../assets/logo.png" alt="logo" class="circle-logo">
      <div>
        <button class="sign-in-buttons">Sign up</button>
        <button class="sign-in-buttons active">Sign in</button>
      </div>
    </div>
    <img src="../assets/banner.jpg" alt="banner" class="banner">
    <div>
      <div class="paragraph1">
        <p><button class="slots">სლოტები</button> 10 სექტემბერი - 7 ნოემერი</p>
      </div>
      <div class="paragraph2">
        <p>მოიპოვე 10 საგზურიდან ერთ-ერთი</p>
      </div>
      <div class="paragraph3">
        <p>მოხვდი პოკერის ფესტივალზე მალტაში</p>
      </div>

    </div>
</header>
</template>

<script setup>

</script>


<style scoped>

@media (min-width: 401px) {
.sign-in{
  display: none;
}
.paragraph1 {
  display: none;
}
.paragraph2 {
margin-left: 3rem;
font-size: 20pt;
color: #FFFFFF;
font-family: November Gelc;
}
.paragraph3 {
margin-left: 3rem;
font-size: 16pt;
color: #FFFFFF;
opacity: 90%;
}
}




@media (max-width: 400px) {
.slots {
  background-color: #25292B;
  color: white;
  border: none;
  font-size: 12px;
  height: 24px;
  width: 75px;
  border-radius: 15px;

}
.paragraph1{
  margin-left: 1rem;
  color: white;
  opacity: 90%;
  font-family: HelveticaNeue LT;
  font-size: 14px;
}
.paragraph2{
  margin-left: 1rem;
  color: white;
  font-family: November GeLC;
  font-weight: bold;
  font-size: 16px;
}
.paragraph3{
  margin-left: 1rem;
  color: white;
  opacity: 90%;
  font-size: 14px;

}
.sign-in {
  display: flex;
  justify-content: space-between;
  margin: 0px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

}
.circle-logo{
  height: 2rem;
}
.sign-in-buttons {
  font-size: 15px;
  font-family: HelveticaNeue;
  background: none;
  border: none;
  height: 2rem;
  width: 4.5rem;
  color: #FFFFFF;
  

}
.active {
  background-color: #EF602A;
  border-radius: 5px;
}
}
.banner {
  width: 100%;
  margin: 0px;
}
</style>