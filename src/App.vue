<script>
import { state } from './state.js'

import AppMain from './components/AppMain.vue'
import AppHeader from './components/Appheader.vue'

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      state,
      movies: [],
      series: [],
      searched: false
    }
  },
  methods: {
    searchContents(query) {
      this.state.callApi(this.state.movie_api_url + '&query=' + query)
        .then(response => {
          console.log(response.data.results);
          this.movies = response.data.results.filter(movie => movie.poster_path !== null).sort((a, b) => b.popularity - a.popularity);;
        })
        .catch(error => {
          console.error('Error:', error);
        });

      this.state.callApi(this.state.tv_api_url + '&query=' + query)
        .then(response => {
          console.log(response.data.results);
          this.series = response.data.results.filter(serie => serie.poster_path !== null).sort((a, b) => b.popularity - a.popularity);;
        })
        .catch(error => {
          console.error('Error:', error);
        });

      this.searched = true
    }
  }
}
</script>

<template>

  <AppHeader @search="searchContents" />
  <AppMain :movies="movies" :series="series" :searched="searched" />

</template>

<style scoped></style>