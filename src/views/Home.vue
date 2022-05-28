<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <button class="primary" @click="goToTracker"> Primary </button>
  </div>
</template>

<script>
export default {
  methods:{
    goToTracker() {
      this.$router.push({name: 'tracker-minimo'})
    },
  },
    beforeCreate(){
      
      if(!localStorage.getItem('token')){
        this.$router.push('/login')
      }
    }
  
}
</script>

