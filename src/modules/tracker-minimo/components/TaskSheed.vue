<template>
    <div class="task border border-secondary col-7" >
        <h1 class="">tarea</h1>
        <div class="task-header row">
            <div>
            <span>Marzo</span>
            </div>
            <div class="level-container col-4">
                <span class="level-label">Minimo</span>
            </div>
            <div class="level-container col-4">
                <span class="level-label">Bien</span>
            </div>
            <div class="level-container col-4">
                <span class="level-label">Ideal</span>
            </div>
        </div>
        <div class="row"   v-for="day  in days" :key="day">
            <span class="day-number">{{day.dayNumber}}</span>
            <div v-bind:class="{selected: (day.level == 1 || day.level == 2 || day.level == 3 )}" 
                 class="day min col-3"
                 @click="changeDayLevel(day.dayNumber,1)"></div>
            <div class="day ok col-3"
                 v-bind:class="{selected: (day.level == 2 || day.level == 3 )}"
                 @click="changeDayLevel(day.dayNumber,2)"></div>
            <div class="day ideal col-3"
                 v-bind:class="{selected: ( day.level == 3 )}"
                 @click="changeDayLevel(day.dayNumber,3)"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
    },
    data(){
        return{
            days: [
                { dayNumber:1, level: 0 },
                { dayNumber:2, level: 1 },
                { dayNumber:3, level: 2 },
                { dayNumber:4, level: 3 },
                { dayNumber:5, level: 0 },
                { dayNumber:6, level: 1 },
                { dayNumber:7, level: 2 },
                { dayNumber:8, level: 3 },
                { dayNumber:9, level: 0 },
                { dayNumber:10, level: 0 },
            ]
        }
    },
    methods:{
        changeDayLevel(dayNumber, level){
            this.days[dayNumber -1].level = Number(level);
        }
    }

}
</script>

<style lang="scss" scoped>
.task{
    margin-top: 10%;
    height: 80vh;
}
.day{
    height:20px;
    background-color: dodgerblue;
    padding-top: 5px;
    margin-top: 5px;
    margin-left: 2px;

}

.min{
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-left-style: dashed solid;

}

.ideal{
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-left-style: dashed solid;
}


.level-label{
    padding: 60px;
}

.day-number{
    padding-left: 60px;
    display: inline-flex;
    width: 30px;
    height: 20px;
}

.selected{
    background-color: rgb(4, 6, 8);
}
</style>
