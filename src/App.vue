<script>
import { state } from './state.js'

export default {
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

<template></template>

<style scoped></style>