import axios from 'axios'

export const getData = (latitude, longitude) =>
    axios.get(`http://localhost:3001/display?lat=${latitude}&long=${longitude}`)
        .then(res => ({data: res.data, err: null}))
        .catch(err => ({data: null, err}))
