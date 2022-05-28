<template>
<div class="row">
        <div class="col-4 border-right border-secondary " id="side-menu">
           <div class="task-scrollarea">
               <button @click="clearActivity" class="btn btn-success">Nueva tarea</button>
            <Task class="task"
                v-for="task in tasks"
                :key="task.activity_id"
                :task="task"
                @click="selectActivity(task.activity_id)"/>
        

            </div>
        </div>
        <div class="col">
            <h2>Descripción de la actividad</h2>

            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Título</span>
                <input id="activity-title" 
                       type="text" 
                       class="form-control" 
                       aria-label="Sizing example input" 
                       aria-describedby="inputGroup-sizing-default"
                       v-model="title">
            </div>

            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Mínimo</span>
                <input 
                        type="text" 
                        class="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-sm"
                        v-model="labels.min">
            </div>

            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Ok</span>
                <input 
                        type="text" 
                        class="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-sm"
                        v-model="labels.ok">
            </div>

            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Ideal</span>
                <input 
                        type="text" 
                        class="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-sm"
                        v-model="labels.ideal">            
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Inspiración</span>
                <input 
                        id="activity-description" 
                        type="text" 
                        class="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                        v-model="description">
            </div>

            <button 
                @click="deleteActivity"    
                class="btn btn-danger">
                Eliminar Actividad
                <i class="fa fa-trash"></i>
            </button>

        <SaveButton
            @click="updateActiv"    
            icon='fa-save'/>

        </div>

</div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
import getActivities from '../helpers/getActivities'
import newActivity from '../helpers/newActivity'
import delActivity from '../helpers/delActivity'
import updateActivity from '../helpers/updateActivity'
export default {
    components:{
        Task: defineAsyncComponent(() => import('../components/Task.vue')),
        SaveButton: defineAsyncComponent( () => import('../components/SaveButton.vue'))
        //SideMenu: defineAsyncComponent( () => import('../components/SideMenu.vue')),

    },
    data(){
        return{
             tasks:[],
             activity_id:'', 
             title: '',
             labels:{
                 min: '',
                 ok: '',
                 ideal: ''
             },
             description: ''
             
        }
    },
    methods:{

        async getTasks(){
            let {activities} = await getActivities();
            console.log(activities)
            this.tasks = activities
        },
        clearActivity(){
            
            this.activity_id = ''
            this.title = ''
            this.labels = {
                 min: '',
                 ok: '',
                 ideal: ''
             }
            this.description = ''
            
        },
        selectActivity(id){
            
            let currentTask = this.tasks[this.tasks.findIndex(t => t.activity_id == id)]
            this.activity_id = currentTask.activity_id
            this.title = currentTask.title
            this.labels = currentTask.labels
            this.description = currentTask.description
            
        },
        async updateActiv(){
            if(this.activity_id != ''){
                let {message} = await updateActivity(this.activity_id,this.title,this.labels,this.description)
                console.log(message) 
                this.getTasks()  
            }
            else{
                let {message} = await newActivity(this.title,this.labels,this.description)
                console.log(message) 
                this.getTasks()   
            }
        },
        async deleteActivity(){
            if(this.activity_id != ''){
                 await delActivity(this.activity_id).then(()=>{
                     console.log('Actividad Eliminada')
                 })
                 this.getTasks()      
            }
            
        }
    
    },
    beforeCreate(){
      
      if(!localStorage.getItem('token')){
        this.$router.push('/login')
      }
    },
    created(){
        this.getTasks()
    }


}
</script>

<style lang="scss" scoped>
.menu-container {
    border-right: 1px solid dimgray;
    height: calc(100vh - 56px);
    
}

.task-scrollarea {
    height: calc(100vh - 110px);
    overflow: scroll;
}

</style>