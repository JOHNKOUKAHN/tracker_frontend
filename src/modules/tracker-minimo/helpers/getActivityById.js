import activitiesAPI from '../api/activities/activities.js'

const getActivityById= async (id) => {
    
    const activity = await activitiesAPI.get(`/trackerapi/activity/${id}`).then(response => {
        return(response.data.activity)
      })
      console.log(activity)
    return activity

}

export default getActivityById