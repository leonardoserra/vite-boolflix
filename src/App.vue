<script>
import { store } from './store.js';
import axios from 'axios';

export default {
  data() {
    return {
      store
    }
  },
  method: {
    getMovies() {
      const endpointRoot = 'https://api.themoviedb.org/3/search/movie?api_key=59d77b0a67470408acdf8c71d519c3b4&language=it-IT&query='
      axios.get(endpointRoot + 'dragonball')
        .then(response => {
          this.store.movies = response.results;
          console.log(this.store);
        })
    }
  },
  created() {
    this.getMovies();
  }
}
</script>

<template></template>

<style scoped lang="scss">
@use "./style/general.scss"
</style>
