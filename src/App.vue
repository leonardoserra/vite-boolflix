<script>
import { store } from './store.js';
import axios from 'axios';
import SearchBar from './components/SearchBar.vue';
import MyMain from './components/MyMain.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    SearchBar,
    MyMain
  },
  methods: {
    searchTitles() {
      this.getMovies();
      this.getTvSeries();
    },
    getMovies() {
      let endpointRoot = `https://api.themoviedb.org/3/search/movie`
      axios.get(endpointRoot,
        {
          params: {
            api_key: this.store.apiToken,
            language: 'it-IT',
            query: this.store.search
          },
        }
      )
        .then(response => {
          this.store.movies = response.data.results;
          console.log("log di aggiunta Movies:");
          console.log(this.store);
        })
    },
    getTvSeries() {
      let endpointRoot = `https://api.themoviedb.org/3/search/tv`
      axios.get(endpointRoot,
        {
          params: {
            api_key: this.store.apiToken,
            language: 'it-IT',
            query: this.store.search
          },
        }
      )
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
  <SearchBar @clickSearch="searchTitles" />
  <MyMain />
</template>

<style scoped lang="scss">
@use "./style/general.scss"
</style>
