<template>
    <NavBar/>

    <div class="d-flex">
        <!-- <div class="col-4 border-right border-secondary" id="side-menu">
            <SideMenu
                @emitMont="checkMont($event)"
            />
        </div> -->

        <div class="row col justify-content-center" id="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
import getActivities from '../helpers/getActivities'
export default {
    components:{
        NavBar: defineAsyncComponent( () => import('../components/NavBar.vue')),
        //SideMenu: defineAsyncComponent( () => import('../components/SideMenu.vue')),
    },
    data() {
        return{
            task: null
        }

    },
    methods:{
        async getTask(){
            let {activities} = await getActivities();
            console.log(activities)
            this.task = activities[0]
            
            const date = new Date()
            const monthNumber = date.getMonth() + 1
            const year = date.getFullYear()
            console.log(this.task,monthNumber, year) 
            
            this.$router.push({name: 'task', params: {id: this.task.activity_id, month: monthNumber, year: year}})
        },
    
        
    },
    created(){
        this.getTask()
        }
}
</script>
