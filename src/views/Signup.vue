<template>
  <form @submit.prevent="signup">
    <h1 class="h3 mb-3 fw-normal">Regístrate</h1>

    <div class="form-floating">
      <input v-model="name" type="text" class="form-control" >
      <label for="floatingInput">Nombre</label>
    </div>

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
    <button class="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
    <div style="text-align: center">¿Ya tienes cuenta? <router-link to="/login" class="nav-link">Accede aquí</router-link> </div>
    
    </form>
</template>

<script>
import axios from 'axios'

export default {

    data(){
        return{
            name:'',
            email:'',
            pass: ''
        }
    },

    methods:{
        async signup(){
            await axios.post('https://daily-activities-tracker.herokuapp.com/trackerapi/auth/',{name: this.name,email: this.email, password: this.pass})
          .then(response =>{
            console.log(response.data)
          } )

        }
    }

}
</script>

<style>

</style>