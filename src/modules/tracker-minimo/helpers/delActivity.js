import activitiesAPI from '../api/activities/activities.js'

const delActivity= async (id) => {
    
    await activitiesAPI.delete(`/trackerapi/activity/delete/${id}`).then(response => {
        return(response.data.activity)
      })

}

export default delActivity