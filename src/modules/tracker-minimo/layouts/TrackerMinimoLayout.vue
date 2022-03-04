<template>
    <NavBar/>

    <div class="d-flex">
        <div class="col-4 border-right border-secondary" id="side-menu">
            <SideMenu
                @emitMont="checkMont($event)"
            />
        </div>

        <div class="row col justify-content-center" id="content">
            <router-view/>
            {{selectedMont}}
            <Task :days="this.days" />
        </div>
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        NavBar: defineAsyncComponent( () => import('../components/NavBar.vue')),
        SideMenu: defineAsyncComponent( () => import('../components/SideMenu.vue')),
        Task: defineAsyncComponent( () => import('../components/Task.vue'))
    },
    data() {
        return{
            selectedMont: {},
            days: null
            
        }

    },
    methods:{
        checkMont(mont){
            console.log(mont);
            this.selectedMont = mont;
            this.days = mont.days;

        }
    }
}
</script>
