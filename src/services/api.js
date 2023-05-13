import axios from 'axios';

export const CategoryMovies = asyn (API_URL) => {
    try {
        let response = await axios.get(API_URL)
    } catch (error) {
        console.log('Error while calling the API', error.message);
        return  error.response.data;
    }
}