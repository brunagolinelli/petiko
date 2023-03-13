<template>
  <div id="main-banner">
    <h2>Um jeito bonito e sustentavel de decorar sua casa</h2>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
};
</script>

<style scoped>
#main-banner {
  background-image: url("https://www.sbpallet.com.br/wp-content/uploads/2020/04/jardim-vertical-SB-Pallet.jpg");
  background-position: 0 -250px;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

#main-banner h2 {
  color: beige;
  text-align: center;
  font-size: 50px;
  background-color: darkkhaki;
  padding: 20px 40px;
}
</style>