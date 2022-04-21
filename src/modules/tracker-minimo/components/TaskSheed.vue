<template>
    <div  v-if="reg && activity" class="task  col-12" >
        <h1 class="">{{activity.title}}</h1>
        <div class="task-header row">
            <div>
            <div>    
            <span id="month-display">{{monthName}}</span>
            <span id="year-display">{{year}}</span>
            </div>
            </div>
            <div class="level-container">
                <span class="level-label">Minimo: {{activity.labels.min}}</span>
            </div>
            <div class="level-container">
                <span class="level-label">{{activity.labels.ok}}</span>
            </div>
            <div class="level-container">
                <span class="level-label">{{activity.labels.ideal}}</span>
            </div>
        </div>
        <div class="row"   v-for="(day,i)  in reg.daysLabel" :key="day">
            <span class="day-number"
                   @click="changeDayLevel(i,0)">{{i+1}}</span>
            <div v-bind:class="{selected: (day == 1 || day == 2 || day == 3 )}" 
                 class="day min"
                 @click="changeDayLevel(i,1)"></div>
            <div class="day ok "
                 v-bind:class="{selected: (day == 2 || day == 3 )}"
                 @click="changeDayLevel(i,2)"></div>
            <div class="day ideal "
                 v-bind:class="{selected: ( day == 3 )}"
                 @click="changeDayLevel(i,3)"></div>
        </div>
    </div>
</template>

<script>
import getActivities from '../helpers/getActivities'
import getActivityById from '../helpers/getActivityById'
import getDate from '../helpers/getDate'
import getRegister from '../helpers/getRegister'
import getBlankRegister from '../helpers/getBlankRegister'
export default {
    props:{
         id:{
        type: String,
        required: true  
      },
      month:{
        type: String,
        required: true  
      },
      year:{
        type: String,
        required: true  
      }
        
    },
    data(){
        return{
            reg: null,
            activity: null,
            months:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
       

        }
    },
    methods:{
        changeDayLevel(dayNumber, level){
            this.reg.dayLevels[dayNumber] = Number(level);
        },
        getTasks(){
            let {activities} = getActivities();
            this.tasks = activities
        },
        async getActivity(){
            this.activity  = await getActivityById(this.id); 
            console.log(this.activity)
        },
        getDateYear(){
            let {monthName} = getDate(Date().toString())
            this.monthName= monthName
        },
        async setRegister(){  
         this.reg = await getRegister(this.id,this.month,this.year)
         if(!this.reg){
             this.reg = getBlankRegister(this.id,this.month,this.year)
         }

        },
    },
    computed:{
      monthName(){
        return this.months[Number(this.month) - 1]
      }
    },
    created(){
        this.getActivity()
        this.getDateYear()
        this.setRegister()
    },
    updated(){
        
    },
    watch:{ 
      id(){
        console.log("id changed TS")
        this.setRegister()
      },
      month(){
        console.log("Month changed TS")
        this.setRegister()
      },
      year(){
        console.log("Year changed TS")
        this.setRegister()
      }
        }
    

}
</script>

<style lang="scss" scoped>
h1{
    width: 200px;
    margin: 0 auto;
    font-size: 3rem;
}
.task{
    margin: 10% auto;
    max-width: 800px;
    font-family: 'Square Peg', cursive;
    color: #5497A7

}
.day{
    width: 25%;
    height: 20px;
    background-color: #78CAD2;
    padding-top: 5px;
    margin-top: 5px;
    margin-left: 2px;

}

.min{
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-left-style: dashed solid;

}

.ideal{
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-left-style: dashed solid;
}

.level-container{
    width: 30%;
    text-align: end;
}
.level-label{
    padding-left: 40px;
}

.day-number{
    padding-left: 60px;
    display: inline-flex;
    width: 30px;
    height: 20px;
}

.selected{
    background-color: #50858B;
}

#month-display{
    margin-left: 20%;
    font-size: 2rem;
}
#year-display{
    margin: 1em;
    font-size: 1rem;
}

</style>
