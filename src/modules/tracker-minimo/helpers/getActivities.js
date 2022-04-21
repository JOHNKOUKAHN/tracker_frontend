import activitiesAPI from '../api/activities/activities.js'

const getActivities= async () => {

    const activities = await activitiesAPI.get('/trackerapi/activity/').then(response => {
        return(response.data.activities)
      })
    return {activities}
}

export default getActivities