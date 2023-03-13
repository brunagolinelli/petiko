<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <nav-bar-component />
    <side-bar-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBar.vue";
import SideBarComponent from "@/components/SideBar.vue";
import FooterComponent from "@/components/Footer.vue";
export default {
  name: "App",

  components: {
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
  },
};
</script>

<style>
* {
  font-family: "Helvetica";
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  margin: 50px;
  min-height: 600px;
  align-items: center;
}
</style>
