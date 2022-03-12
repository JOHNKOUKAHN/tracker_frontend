<template>
    <div class="menu-container">
        {{selectedMont.days}}
        <div class="date-container">
            <div class="col-4">
                <label for="demo_overview">Escoja una fecha</label>
                <select id="year-selected" class="form-control" data-role="select-dropdown">
                    <option value="" selected disabled>Año</option>
                </select>
            </div>
            <div class="col-5">    
                <select id="mont-selected" 
                        class="form-control" 
                        data-role="select-dropdown" 
                        @change="selectMont($event)"
                        >
                    <option value="" selected disabled>Mes</option>
                    <option 
                        v-for="mont in monts" 
                        :key="mont.id"
                        > {{mont.name}} </option>
                </select>
            </div>
        </div>
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
                v-for="task in 100"
                :key="task"/>
        

        </div>



    </div>
</template>
<script>

import {defineAsyncComponent} from 'vue'
export default {
    components:{
        Task: defineAsyncComponent(() => import('./Task.vue'))
    },
    data(){
        return{
            
            selectedMont: {},    
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
        selectMont(event){
            console.log(event.target.options[event.target.options.selectedIndex].text)
            this.selectedMont = this.monts[event.target.options.selectedIndex-1];
            this.$emit('emitMont',this.monts[event.target.options.selectedIndex-1]);
        }
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