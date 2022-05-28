<template>
<div class="task"
     @click="pushRoute()">
    <h2>{{task.title}}</h2>
    {{task.importance}}
</div>
</template>

<script>

export default {
    props:{
        task:{
            type: Object,
            required: true
        }
    },
    methods:{
        pushRoute(){
            this.$router.push({name: 'activities', params: {id: this.task.activity_id}})
        }
    }
    
}
</script>
<style lang='scss' scoped>
.task {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover{
        background-color: lighten($color:gray, $amount: 45);
    }
}

</style>
