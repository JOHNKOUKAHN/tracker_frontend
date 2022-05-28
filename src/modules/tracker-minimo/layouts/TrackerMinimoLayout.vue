<template>
    <div class="d-flex">
        <div class="row col justify-content-center" id="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import getActivities from '../helpers/getActivities'
export default {
    components:{
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
    created(){
        this.getTask()
        }
}
</script>
