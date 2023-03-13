<template>
  <div>
    <banner-component />
    <b-container fluid class="container">
      <h1 class="mb-4 mt-4">Produtos</h1>
      <b-row>
        <b-col cols="6">
          <b-img
            thumbnail
            fluid
            src="https://casa.abril.com.br/wp-content/uploads/2021/06/palete-cama-decoist-04.jpg?quality=95&strip=info&w=1024"
            alt="cama"
            width="500%"
            height="400%"
          ></b-img>
          <label class="mb-4"
            ><strong>Cama de pallet - madeira pinus</strong></label
          >
        </b-col>
        <b-col cols="6">
          <b-img
            thumbnail
            fluid
            src="https://m.media-amazon.com/images/I/41JI0BkYFRL._AC_.jpg"
            alt="decaração"
            width="370%"
            height="100%"
          ></b-img>
          <label class="mb-4"
            ><strong>Cama de pallet - madeira pinus</strong></label
          >
        </b-col>
        <b-col cols="6" class="mb-4">
          <b-img
            thumbnail
            fluid
            src="https://casaeconstrucao.org/wp-content/uploads/2016/07/moveis-de-paletes-2.jpg"
            alt="estante"
            width="400%"
            height="500%"
          ></b-img>
          <label class="mb-4"
            ><strong>painel para sala - madeira pinus</strong></label
          >
        </b-col>
        <b-col cols="6" class="mt-4">
          <b-img
            thumbnail
            fluid
            src="https://i.ytimg.com/vi/XKvM7JVzbCQ/maxresdefault.jpg"
            alt="mesa"
            width="600%"
            height="500%"
          ></b-img>
          <label class="mb-4"
            ><strong>Decoração para area interna - madeira pinus</strong></label
          >
        </b-col>
        <b-col cols="6" class="mt-4">
          <b-img
            thumbnail
            fluid
            src="https://static.hbt.triider.com.br/photos/project/medium/jardim-com-palets-1234414.jpg"
            alt="jardim"
            width="500%"
            height="500%"
          ></b-img>
          <label class="mb-4"
            ><strong
              >Jardim com coreto feito de pallet- madeira pinus</strong
            ></label
          >
        </b-col>
        <b-col cols="6">
          <b-img
            thumbnail
            fluid
            src="https://poplembrancinhas.com.br/wp-content/uploads/2018/08/moveis-lindos-de-paletes-de-madeira-capa-3.jpg"
            alt="decoração 2"
            width="480%"
            height="500%"
          ></b-img>
          <label class="mb-4"
            ><strong>Decoração ára area externa - madeira pinus</strong></label
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BannerComponent from "@/components/Banner.vue";
export default {
  name: "Home",
  components: { BannerComponent },
};
</script>

<style scoped>
</style>