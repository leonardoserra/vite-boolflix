<script>
import { store } from "../store.js";
import MovieCard from "./MovieCard.vue"
import TvSeriesCard from "./TvSeriesCard.vue"
import MySelectMovie from "./MySelectMovie.vue"
import MySelectTvSeries from "./MySelectTvSeries.vue"

export default {
    name: 'MyMain',
    data() {
        return {
            store
        }
    },
    components: {
        MovieCard,
        TvSeriesCard,
        MySelectMovie,
        MySelectTvSeries
    },
    methods: {
        // filterForGenreMovie() {
        //     this.store.movies.forEach(element => {
        //         if (element.genre_ids.includes(this.store.selectedMovieGenre)) {
        //             if (this.store.movies.length > 0) {
        //                 this.store.movies = [];
        //             } else {
        //                 this.store.movies.push(element);
        //             }
        //         }
        //     })
        //     console.log(this.store.movies)
        // },

        // filterForGenreTvSeries() {
        //     const newTvSeries = this.store.tvSeries.filter(element => {
        //         element.genre_ids.includes(this.store.selectedTvSerieGenre);
        //     })
        //     this.store.tvSeries = newTvSeries;
        // }


    }

}
</script>
<template>
    <main>

        <div v-if="!store.movies.length && !store.tvSeries.length && !store.search.length" class="request">
            <h2>Cerca qualcosa, i risultati appariranno qui..</h2>
        </div>
        <div v-else-if="!store.movies.length && !store.tvSeries.length && store.search.length">
            <h2>La ricerca non ha prodotto risultati..</h2>
        </div>

        <div v-else class="monitor">
            <section v-show="store.tvSeries.length">
                <h1 class="category">Movies</h1>
                <MySelectMovie @movieFilterEvent="(filterForGenreMovie)" :moviesGenres="store.movieGenres"
                    :tvSeriesGenres="store.tvSeriesGenres" />
                <div class="container">
                    <div class="movie-card" v-for="(movie, index) in store.movies" :key="index">
                        <MovieCard :title="movie.title" :og_title="movie.original_title" :language="movie.original_language"
                            v-if="store.selectedMovieGenre == '' || movie.genre_ids.includes(store.selectedMovieGenre)"
                            :vote="movie.vote_average" :poster_img="movie.poster_path" />
                    </div>
                </div>

            </section>
            <section v-show="store.tvSeries.length">
                <h1 class="category">Tv Series</h1>
                <MySelectTvSeries @tvSerieFilterEvent="(filterForGenreTvSeries)" :tvSeriesGenres="store.tvSeriesGenres"
                    :moviesGenres="store.movieGenres" />
                <div class="container">
                    <div class="tv-series-card" v-for="(tvSerie, index) in store.tvSeries" :key="index">
                        <TvSeriesCard :title="tvSerie.name" :og_title="tvSerie.original_name"
                            v-if="store.selectedTvSerieGenre == '' || tvSerie.genre_ids.includes(store.selectedTvSerieGenre)"
                            :language="tvSerie.original_language" :vote="tvSerie.vote_average"
                            :poster_img="tvSerie.poster_path" />
                    </div>
                </div>

            </section>
        </div>

    </main>
</template>


<style scoped lang="scss">
.monitor {


    .category {
        padding: 0 20px;
        background-color: rgb(0, 0, 0);
        color: white;
        height: 50px;
        line-height: 50px;
    }

    .container {
        // padding: 0 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;

        .movie-card,
        .tv-series-card {
            // margin: 0 10px;
            width: calc(100% / 5);
        }
    }
}
</style>
