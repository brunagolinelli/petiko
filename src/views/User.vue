<template>
  <div class="container">
    <h1 class="mb-4">Bem vindo!</h1>
    <b-card id="heading">
    <div id="users">
      <div>
        <label><strong>Usuário:</strong></label>
        <label class="mx-2">{{user.email}}</label>
      </div>
      <div>
        <label><strong>Email:</strong></label>
        <label class="mx-2"> {{user.phone}}</label>
      </div>
      <div>
        <label><strong>CPF:</strong></label>
        <label class="mx-2"> {{user.CPF}} </label>
      </div>
    </div>
  </b-card>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name:"UserComponent",
  data(){
    return {
      user: "",
    }
  },
  methods:{
    async getUsers(){
      const res = await axios.get("http://localhost:3000/user")

      this.user = res.data

      console.log(this.user)
    }
  },
  mounted(){
    this.getUsers()
  }
}
</script>

<style scoped>
#heading{
display: flex;
flex-wrap: wrap;
max-width: 50%;
margin-top: 16px;
margin-right: 0;
}

#users{
  margin:16px;
}



</style>