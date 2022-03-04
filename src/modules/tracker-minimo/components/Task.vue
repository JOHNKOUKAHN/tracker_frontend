<template>
    <div class="task border border-secondary col-7" >
        <h1>tarea</h1>
        <div class="row"   v-for="day  in days" :key="day">
            {{day}} 
            <div class="day col-3"></div>
            <div class="day col-3"></div>
            <div class="day col-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        days:{
            type: Number
        }
    }
}
</script>

<style scoped>
.task{
    margin-top: 10%;
    height: 80vh;
}
.day{
    height: 15px;
    background-color: dodgerblue;

}
</style>