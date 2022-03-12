<template>
  <TaskSheet/>
  <SaveButton
  icon='fa-save'/>
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        TaskSheet:  defineAsyncComponent(() => import('./../components/TaskSheed.vue')),
        SaveButton: defineAsyncComponent( () => import('../components/SaveButton.vue'))
    }

}
</script>

<style>

</style>