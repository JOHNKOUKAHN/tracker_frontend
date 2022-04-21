<template>
<div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay registros para esta actividad en esta fecha </h1>
    <h3 class="align-self-center">Presiona el botón para empezar un nuevo registro </h3>

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