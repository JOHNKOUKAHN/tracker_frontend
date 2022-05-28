<template>
  <form @submit.prevent="login">
    <h1 class="h3 mb-3 fw-normal">Acceder</h1>

    <div class="form-floating">
      <input v-model="email" type="email" class="form-control"  placeholder="name@example.com">
      <label for="floatingInput">Correo electrónico</label>
    </div>
    <div class="form-floating">
      <input v-model="pass" type="password" class="form-control"  placeholder="Password">
      <label for="floatingPassword">Contraseña</label>
    </div>

    <div class="checkbox mb-3">
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Acceder</button>
    <div style="text-align: center">¿No tienes cuenta? <router-link to="/signup" class="nav-link">Regístrate</router-link> </div>
    </form>


</template>

<script>
import axios from 'axios' 
export default {
 data(){
        return{
            email:'',
            pass: ''
        }
    },

    methods:{
      async login(){
                
          await axios.post('https://daily-activities-tracker.herokuapp.com/trackerapi/auth/login',{email: this.email, password: this.pass})
          .then(response =>{
            localStorage.setItem('token',response.data.token)
            console.log(response.data.token)
          } )

            this.$router.push({name:'Home'})
        }
    }


}
</script>

<style>

</style>