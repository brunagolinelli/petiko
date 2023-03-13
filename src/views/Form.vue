
<template>
  <div class="cols-12 col-md-6 container">
    <h2 class="mb-4" style="text-align: center">Formulário de Cadastro</h2>
    <b-form @submit="createUser" @reset="onReset" >
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        class="my-4"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Whatsapp:"
        label-for="input-2"
        class="my-4"
      >
        <b-form-input
          id="input-2"
          v-model="phone"
          placeholder="(xx) xxxx-xxx"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="CPF"
        label-for="input-3"
        class="my-4"
      >
        <b-form-input id="input-3" v-model="CPF" required></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Imagem"
        label-for="input-4"
        class="my-4"
      >
        <b-form-file solo id="input-4" v-model="img">
          <template slot="file-name" slot-scope="{ names }">
            <b-badge variant="dark">{{ names[0] }}</b-badge>
            <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
              + {{ names.length - 1 }}
            </b-badge>
          </template>
        </b-form-file>
      </b-form-group>
      <div style="text-align: center">
        <b-button type="submit" variant="primary" class="my-4 mr-4 ml-2"
          >Enviar</b-button
        >
        <b-button type="reset" variant="danger" class="my-4 mr-4 ml-2"
          >Limpar</b-button
        >
      </div>
    </b-form>
  </div>
</template>

  <script>
import axios from "axios";
export default {
  data() {
    return {
        email: "",
        phone: "",
        CPF: "",
        img: null
    };
  },
  methods: {
    async createUser(e) {
      e.preventDefault();
      
      const data = {
        email: this.email,
        phone: this.phone,
        CPF: this.CPF,
        img: this.img,
      };

      const res = await axios.post("http://localhost:3000/user",data
      );
      
      console.log(res)
    },
    onReset(event) {
      event.preventDefault();
      this.email = "";
      this.phone = "";
      this.CPF = "";
    },
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>