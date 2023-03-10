<template>
     <div>
    <b-sidebar  id="sidebar-menu" aria-labelledby="sidebar-menu-title" bg-variant="dark" text-variant="light" shadow backdrop no-header>
      <template #default="{ hide }">
        <div class="p-3">
        <div class="d-flex align-items-center flex-column">
            <b-avatar variant="primary" text="AP" class="mb-4 mt-4" size="5rem"></b-avatar>
          <h4 id="sidebar-menu-title">Artemins Pallet</h4>
        </div>
        <div class="divider-menu"/>
          <nav class="mb-3">
            <b-nav vertical>
              <router-link to="/produtos" @click="hide" class="router"><b-icon icon="house"/> produtos</router-link>
              <router-link to="/form" @click="hide" class="router"><b-icon icon="file-text"/> Formulário de Casatro</router-link>
              <router-link to="/perfil" @click="hide" class="router"><b-icon icon="person"/> Perfil</router-link>
            </b-nav>
          </nav>
          <!-- <b-button variant="primary" block @click="hide">Close Sidebar</b-button> -->
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
    name: 'SideBarComponent'
}
</script>

<style scoped>
.router{
color: beige;
align-items: center;
text-align: left;
margin-top:4px;
margin-bottom: 2px;
}

.router:hover{
color: #CCC
}

.divider-menu{
    border: 1px solid beige;
    width: 100%;
}
</style>