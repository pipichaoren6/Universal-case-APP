<template>
  <div class="test">
      <div class=" box">
        <img class="card-imd" src="../assets/OIP-C.jpg">
    </div>
    <div class=" box">盒子2 </div>
    <div class=" box">盒子3</div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.test{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.box{
  padding: 10px;
  background-color: aqua;
}
.card-img{
  width: 5px;
  height: 5px;
}


</style>