const getBlankRegister = (taskId,month,year) =>{

    let register = {

        id : Number( String(year) + String(month) + String(taskId)),
        activityId : taskId,
        month : month,
        year : year,
        dayLevels:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    
        }
    console.log(register.dayLevels)
    return register

}

export default getBlankRegister