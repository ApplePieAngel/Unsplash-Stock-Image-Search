import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        //Include Unsplash API key here after Client-ID.
        Authorization: 'Client-ID '
    }
});