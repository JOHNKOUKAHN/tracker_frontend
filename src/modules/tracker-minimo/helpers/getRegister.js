import activitiesAPI from '../api/activities/activities.js'

const getRegister = async (taskId,month,year) =>{

    const register = await activitiesAPI.get(`/trackerapi/register/${taskId}/${year}/${month}`).then(response => {
        console.log(response.status)
        return(response.data.register)
      }).catch(async ()=>{
        await activitiesAPI.post(`/trackerapi/register/${taskId}`,{month,year})
        let register = await activitiesAPI.get(`/trackerapi/register/${taskId}/${year}/${month}`).then(response => {
            console.log(response.status)
            return(response.data.register)})
            return register
      })
      console.log(register)
    return register

}

export default getRegister