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
      series: []
    }
  },
  methods: {
    searchContents(query) {
      this.state.callApi(this.state.movie_api_url + '&query=' + query)
        .then(response => {
          console.log(response.data.results);
          this.movies = response.data.results;
        })
        .catch(error => {
          console.error('Error:', error);
        });

      this.state.callApi(this.state.tv_api_url + '&query=' + query)
        .then(response => {
          console.log(response.data.results);
          this.series = response.data.results;
        })
        .catch(error => {
          console.error('Error:', error);
        });


    }
  }
}
</script>

<template>

  <AppHeader @search="searchContents" />
  <AppMain :movies="movies" :series="series" />

</template>

<style scoped></style>