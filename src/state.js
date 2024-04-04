import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    movie_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=d0d52716cddf9984f802b42762f6e17f',
    tv_api_url: 'https://api.themoviedb.org/3/search/tv?api_key=d0d52716cddf9984f802b42762f6e17f',

    callApi(url) {
        return axios.get(url);
    }
})