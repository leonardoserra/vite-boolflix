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
  },
  created() {
    //prendo i generi movie da api
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.store.apiToken}`)
      .then(response => {
        this.store.movieGenres = response.data.genres;
        console.log(this.store.movieGenres);
      });
    // prendo generi serieTv da api
    axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${this.store.apiToken}`)
      .then(response => {
        this.store.tvSeriesGenres = response.data.genres;
        console.log(this.store.tvSeriesGenres);
      });

  }
  // computed: {
  //   filterForGenreMovie() {
  //     this.store.movies.forEach(element => {
  //       if (element.genre_ids.includes(this.store.selectedMovieGenre)) {
  //         if (this.store.movies.length > 0) {
  //           this.store.movies = [];
  //         } else {
  //           this.store.movies.push(element);
  //         }
  //       }
  //     })
  //     console.log(this.store.movies)
  //   },

  //   filterForGenreTvSeries() {
  //     const newTvSeries = this.store.tvSeries.filter(element => {
  //       element.genre_ids.includes(this.store.selectedTvSerieGenre);
  //     })
  //     this.store.tvSeries = newTvSeries;
  //   },
  // searchTitles() {
  //   this.getMovies();
  //   this.getTvSeries();
  // }

  //prendo i generi movie da api

  // funzioneProva() {

  //   axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.store.apiToken}`)
  //     .then(response => {
  //       this.store.movieGenres = response.data.genres;
  //       console.log(this.store.movieGenres);
  //     });
  //   // prendo generi serieTv da api
  //   axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${this.store.apiToken}`)
  //     .then(response => {
  //       this.store.tvSeriesGenres = response.data.genres;
  //       console.log(this.store.tvSeriesGenres);
  //     });
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
