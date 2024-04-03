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
      movies: []
    }
  },
  methods: {
    searchContents(query) {
      console.log(query);
      this.state.callApi(this.state.key_api_url + '&query=' + query)
        .then(response => {
          console.log(response);
          this.movies = response.data.results;
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
  <AppMain :movies="movies" />

</template>

<style scoped></style>