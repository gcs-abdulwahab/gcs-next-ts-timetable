import axios from 'axios';

// Set the base URL for your API
axios.defaults.baseURL = 'http://gcstimetable.xyz/api';

// Add a request interceptor to log requests
/* axios.interceptors.request.use(
    (config) => {
        // Log the request details before it is sent
        console.log('Request:', config);
        return config;
    },
    (error) => {
        // Handle any request error here
        return Promise.reject(error);
    }
); */

export default axios;
