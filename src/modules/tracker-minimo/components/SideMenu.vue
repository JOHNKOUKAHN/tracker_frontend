<template>
    <div class="menu-container">
        <div class=" task-container">
            <div class="px-2 pt-2">
                <input 
                    type="text"
                    class="form-control"
                    placeholder="Buscar Tareas"
                    >

            </div>
        </div>

        <div class="task-scrollarea">
            <Task class="task"
                v-for="task in tasks"
                :key="task.id"
                :task="task"/>
        

        </div>



    </div>
</template>
<script>
import getActivities from '../helpers/getActivities'
import getDate from '../helpers/getDate'
import getRegister from '../helpers/getRegister'
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        Task: defineAsyncComponent(() => import('./Task.vue'))
    },
    data(){
        return{
            
            selectedMont: {},
            tasks:[],    
            monts:[
                        {id: 1,name: 'Enero', days:31},
                        {id: 2,name: 'Febrero', days:28},
                        {id: 3,name: 'Marzo', days:31},
                        {id: 4,name: 'Abril', days:30},
                        {id: 5,name: 'Mayo', days:31},
                        {id: 6,name: 'Junio', days:30},
                        {id: 7,name: 'Julio', days:31},
                        {id: 8,name: 'Agosto', days:31},
                        {id: 9,name: 'Septiembre', days:30},
                        {id: 10,name: 'Octubre', days:31},
                        {id: 11,name: 'Noviembre', days:30},
                        {id: 12,name: 'Diciembre', days:31},
                    ]
        }
    },
    methods:{

        async getTasks(){
            let {activities} = await getActivities();
            console.log(activities)
            this.tasks = activities
        },

        getDateYear(){
            
            console.log(Date().toString(),"jgjgjhghj")
            let {year,monthName,monthNumber} = getDate(Date().toString())
            console.log(year, monthName, monthNumber,"ggui")
        },
        selectMont(event){
            console.log(event.target.options[event.target.options.selectedIndex].text)
            this.selectedMont = this.monts[event.target.options.selectedIndex-1];
            this.$emit('emitMont',this.monts[event.target.options.selectedIndex-1]);
        }
    },
    created(){
        this.getTasks()
        this.getDateYear()
        let {register} = getRegister(1,3,2022)
        console.log(register)
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