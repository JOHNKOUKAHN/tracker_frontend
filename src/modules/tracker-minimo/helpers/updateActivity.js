import activitiesAPI from '../api/activities/activities.js'

const updateActivity = async (taskId,title, labels, description) =>{

    const message = await activitiesAPI.post(`/trackerapi/activity/update/${taskId}/`,{title,labels,description}).then(response => {
        
        return(response.data)
      })
      console.log(message)
      return message

}

export default updateActivity