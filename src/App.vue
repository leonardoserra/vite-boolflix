<script>
import { store } from './store.js';
import axios from 'axios';
import SearchBar from './components/SearchBar.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    SearchBar
  },
  methods: {
    searchTitles() {
      this.getMovies;
      this.getTvSeries;
    },
    getMovies() {
      let endpointRoot = 'https://api.themoviedb.org/3/search/movie?api_key=59d77b0a67470408acdf8c71d519c3b4&language=it-IT&query='
      axios.get(endpointRoot + this.store.search)
        .then(response => {
          this.store.movies = response.data.results;
          console.log("log di aggiunta Movies:");
          console.log(this.store);
        })
    },
    getTvSeries() {
      let endpointRoot = 'https://api.themoviedb.org/3/search/tv?api_key=59d77b0a67470408acdf8c71d519c3b4&language=it-IT&query='
      axios.get(endpointRoot + this.store.search)
        .then(response => {
          this.store.tvSeries = response.data.results;
          console.log("log di aggiunta serie TV:");
          console.log(this.store);
        })
    }
  }
  // created() {
  //   this.getMovies();
  //   this.getTvSeries();
  //   console.log("lo store completo: ");
  //   console.log(this.store);

  // }
}
</script>

<template>
  <SearchBar @clickSearch="searchTitles()" />
</template>

<style scoped lang="scss">
@use "./style/general.scss"
</style>
