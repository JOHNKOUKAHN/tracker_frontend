<template>
<div id="date-control-panel" class="form-control" >
  <label for="activities"  class="control-label">Actividades</label>
  <select  v-model="taskId" name="activities" id="activities" class="form-control">
  <option v-for="option in tasks" v-bind:key="option.activity_id" v-bind:value="option.activity_id">
    {{ option.title }}
  </option>
</select>
  <button @click="changeMonth(-1)" class="btn" > <i class="fa-solid fa-2x fa-angle-left"></i></button>
  {{monthName}}
  <button @click="changeMonth(1)" class="btn"> <i class="fa-solid fa-2x fa-angle-right"></i></button>

  <button @click="changeYear(-1)" class="btn" > <i class="fa-solid fa-2x fa-angle-left"></i></button>
  {{year}}
  <button @click="changeYear(1)" class="btn" > <i class="fa-solid fa-2x fa-angle-right"></i></button>
 
  
 
</div>
  <TaskSheet 
    :key="taskKey"
    :id="id"
    :month="month"
    :year="year"
    />
</template>

<script>
import {defineAsyncComponent} from 'vue'
import getActivities from '../helpers/getActivities'
//import getDate from '../helpers/getDate'
export default {
    props:{
      id:{
        type: String,
        required: true  
      },
      month:{
        type: String,
        required: true  
      },
      year:{
        type: String,
        required: true  
      }

    },
    components:{
        TaskSheet:  defineAsyncComponent(() => import('./../components/TaskSheed.vue')),
    },
      data(){
        return{
          taskKey: 0,
          tasks:[],
          taskId: null,
          months:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        }
      },
    methods:{
      async getTasks(){
            let {activities} = await getActivities();
            console.log(activities)
            this.tasks = activities
        },

        changeMonth(q){
          if(this.month == 12 && q == 1){
            q = -11
          }
          else if(this.month == 1 && q == -1){
            q = 11
          }
          this.$router.push({name: 'task', params: {id: this.id, month: Number(this.month) + q, year: this.year}})
        },
        changeYear(q){
          this.$router.push({name: 'task', params: {id: this.id, month: this.month, year: Number(this.year) + q}})
        },
        changeActivity(id){
          this.$router.push({name: 'task', params: {id: id, month: this.month, year:this.year}})
        },
        incMonth(){
      
        }
    },
    computed:{
      monthName(){
        return this.months[Number(this.month) - 1]
      }
    },
    beforeCreate(){
      
      if(!localStorage.getItem('token')){
        this.$router.push('/login')
      }
    },
    created(){
        this.getTasks()
     // let {monthName} = getDate()

    },
    watch:{
      
      id(){
        console.log("id changed ")
        this.taskKey++
      },
      month(){
        console.log("Month changed ")
        this.taskKey++
      },
      year(){
        console.log("Year changed wwww")
        this.taskKey++
      },
      taskId(){
        this.changeActivity(this.taskId)
      }
    }

}
</script>

<style>
#date-control-panel{
  max-width: 800px;
  margin: 0 auto;
  padding-left: 30px;
}
</style>