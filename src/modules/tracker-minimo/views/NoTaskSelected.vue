<template>
<div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay registros para esta actividad en esta fecha </h1>
    <h3 class="align-self-center">Presiona el botón para empezar un nuevo registro </h3>

</div>
  <SaveButton/>
</template>
<script>
import {defineAsyncComponent} from 'vue'
import getActivities from '../helpers/getActivities'
export default {
    components:{
         SaveButton: defineAsyncComponent( () => import('../components/SaveButton.vue'))
    },
    methods:{
        async getTask(){
            let {activities} = await getActivities();
            if(activities.length>0){
                this.task = activities[0]
                const date = new Date()
                const monthNumber = date.getMonth() + 1
                const year = date.getFullYear()
                this.$router.push({name: 'task', params: {id: this.task.activity_id, month: monthNumber, year: year}})
            }
            else
                this.$router.push({name: 'activities'})

        },
        },
    beforeCreate(){
      
      if(!localStorage.getItem('token')){
        this.$router.push('/login')
      }
    },
    created(){
        this.getTask()
        }
}
</script>
<style lang="scss" scoped>
div{

    height: 100%;
}
</style>