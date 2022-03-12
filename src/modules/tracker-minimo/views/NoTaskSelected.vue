<template>
<div class="d-flex justify-content-center">
    <h1 class="align-self-center">No se Ha seleccionado ningun mes</h1>
</div>
  <SaveButton/>
</template>
<script>
import {defineAsyncComponent} from 'vue'

export default {
    components:{
         SaveButton: defineAsyncComponent( () => import('../components/SaveButton.vue'))
    }
}
</script>
<style lang="scss" scoped>
div{

    height: 100%;
}
</style>