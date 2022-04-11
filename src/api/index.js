import axios from 'axios';

const getApiUrl = () => {
    return "http://localhost:8080/api/";
}

export const API_URL = getApiUrl();

export default axios.create({
    baseURL: API_URL
});