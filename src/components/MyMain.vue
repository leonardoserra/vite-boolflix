<script>
import { store } from "../store.js";
import MovieCard from "./MovieCard.vue"
import TvSeriesCard from "./TvSeriesCard.vue"

export default {
    name: 'MyMain',
    data() {
        return {
            store
        }
    },
    components: {
        MovieCard,
        TvSeriesCard
    }
}
</script>
<template>
    <div class="container">
        <div class="movie-card" v-for="(movie, index) in store.movies" :key="index">
            <MovieCard :title="movie.title" :og_title="movie.original_title" :language="movie.original_language"
                :vote="movie.vote_average" :poster_img="movie.poster_path" />
        </div>
    </div>

    <div class="container">
        <div class="tv-series-card" v-for="(tvSerie, index) in store.tvSeries" :key="index">
            <TvSeriesCard :title="tvSerie.name" :og_title="tvSerie.original_name" :language="tvSerie.original_language"
                :vote="tvSerie.vote_average" :poster_img="tvSerie.poster_path" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.container {
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .movie-card,
    .tv-series-card {
        width: calc(100% / 5 - 20px);
    }
}
</style>
