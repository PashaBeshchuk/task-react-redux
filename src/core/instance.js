import axios from 'axios';

const instance = axios.create({    
    baseURL:'http://77.120.241.80:8911/api',
    headers: {
        'Content-Type': 'application/json',
    },
});



export default instance;