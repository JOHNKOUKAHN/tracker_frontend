import activitiesAPI from '../api/activities/activities.js'

const updateRegister = async (taskId,month,year,days,values) =>{

    const message = await activitiesAPI.post(`/trackerapi/register/update/${taskId}/${year}/${month}`,{days: days, values: values}).then(response => {
        
        return(response.data)
      })
      console.log(message)
      return message

}

export default updateRegister