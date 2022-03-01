<template>
    <NavBar/>

    <div class="d-flex">
        <div class="col-4" id="side-menu">
            Menu lateral
        </div>

        <div class="col" id="content">
            <router-view/>
            Area de contenido
        </div>
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        NavBar: defineAsyncComponent( () => import('../components/NavBar.vue'))
    }
}
</script>

<style>
    #side-menu{
        background-color: darkcyan;
    }

    #content{
        background-color: cadetblue;
    }
</style>