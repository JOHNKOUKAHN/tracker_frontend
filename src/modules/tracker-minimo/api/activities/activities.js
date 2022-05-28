import axios from 'axios'

const activitiesAPI = axios.create({
    baseURL: 'https://daily-activities-tracker.herokuapp.com',
    headers: {'x-token':localStorage.getItem('token')} //don't forget to change API key to your exact key
})



export default activitiesAPI