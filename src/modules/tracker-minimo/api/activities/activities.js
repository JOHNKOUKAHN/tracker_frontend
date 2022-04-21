import axios from 'axios'

const activitiesAPI = axios.create({
    baseURL: 'https://daily-activities-tracker.herokuapp.com',
    headers: {'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjQ5MDU3ZjEzNGU1ZjE2ZDM0N2FlYjkiLCJuYW1lIjoiUGFibG8iLCJpYXQiOjE2NTA1MDE3MjYsImV4cCI6MTY1MDUxNjEyNn0.9cuEpMd7LNrt3sHSrpnMHe3mECP7OEsnQE0j0S1rHRg'} //don't forget to change API key to your exact key
})



export default activitiesAPI