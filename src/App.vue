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
      state
    }
  },
  mounted() {
    this.state.callApi(this.state.key_api_url)
  }
}
</script>

<template>

  <AppHeader />
  <AppMain />

</template>

<style scoped></style>