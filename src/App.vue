<!-- eslint-disable prettier/prettier -->
<template>
<div>
  <nav-bar-component />
  
  <side-bar-component/>
 
  <router-view/>
</div>
</template>

<script>
import NavBarComponent from "@/components/NavBar.vue";
import SideBarComponent from "@/components/SideBar.vue";
export default {
name: "App",

components: {
  NavBarComponent,
  SideBarComponent,
},
};
</script>

<style></style>
