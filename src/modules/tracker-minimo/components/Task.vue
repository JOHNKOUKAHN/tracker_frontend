<template>
<div class="task"
     @click="$router.push({name: 'task', params: {id:10}})">
    <h2>Tarea</h2>
    Descripcion de la tarea
</div>
</template>

<style lang='scss' scoped>
.task {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover{
        background-color: lighten($color:gray, $amount: 45);
    }
}

</style>
