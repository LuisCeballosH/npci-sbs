import axios from 'axios';

export default axios.create({
    baseURL: "data",
    //baseURL: "http://localhost:9080",
});