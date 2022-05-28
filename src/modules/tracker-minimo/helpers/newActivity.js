import activitiesAPI from '../api/activities/activities.js'

const newActivity = async (title, labels, description) => {
    const message = await activitiesAPI.post(`/trackerapi/activity/`,{title,labels,description}).then(response => {
        return response.status
    })
    
    return message
}

export default newActivity