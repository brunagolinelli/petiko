
<template>
  <div class="cols-12 col-md-6 container mt-4 pt-2">
    <h2 >Formulário de Cadastro</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Whatsapp:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.phone"
          placeholder="(xx) xxxx-xxx"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="CPF" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.CPF"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Imagem" label-for="input-4">
      <b-form-file solo id="input-4">
        <template slot="file-name" slot-scope="{ names }">
          <b-badge variant="dark">{{ names[0] }}</b-badge>
          <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
            + {{ names.length - 1 }}
          </b-badge>
        </template>
      </b-form-file>
    </b-form-group>

      <b-button type="submit" variant="primary" class="mt-4 mr-4 ml-2">Submit</b-button>
      
      <b-button type="reset" variant="danger" class="mt-4 mr-4 ml-2">Reset</b-button>
    
    </b-form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      form: {
        email: "",
        phone: "",
        CPF: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.phone = "";
      this.form.CPF = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
};
</script>

<style scoped>
.container {
  align-items: center;
  text-align: center;
  margin-top: 16px;
  gap: 8px;
  padding: 16px;
}

</style>