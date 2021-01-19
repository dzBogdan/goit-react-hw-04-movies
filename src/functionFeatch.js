import axios from 'axios';

const API_KEY = '129ffa9580a28f75ef0a243752f1c695';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

export const BASE_URL_POSTR = 'https://image.tmdb.org/t/p/original';

export function popularFetch(page = 1) { 
    return axios.get(`/trending/all/day?api_key=${API_KEY}&page=${page}`).then(res => {
         
        return res.data.results
    });
}

export function searchMoviesByKeyword(keyword,page=1) { 
    return axios.get(`/search/movie?api_key=${API_KEY}&lenguage=en-US&query=${keyword}&page=${page}&include_adult=false`).then(res => {
       return res.data.results
    });
}

export function gethMoviesDetailById(id) { 
    return axios.get(`/movie/${id}?api_key=${API_KEY}`).then(res => {
        
       return res.data
    });
}

export function getCastByMoviesId(id,page=1) { 
    return axios.get(`/movie/${id}/credits?api_key=${API_KEY}&lenguage=en-US&page=${page}`).then(res => {
       
       return res.data.cast
    });
}

export function getReviewsById(id, page = 1) { 
    return axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&lenguage=en-US&page=${page}`).then(res => {
        console.log(res.data.results);
        return res.data.results
    });
}