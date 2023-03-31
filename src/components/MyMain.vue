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
        <div class="card" v-for="(movie, index) in store.movies" :key="index">
            <MovieCard :title="movie.title" :og_title="movie.original_title" :language="movie.original_language"
                :vote="movie.vote_average" />
        </div>

        <div class="card" v-for="(tvSerie, index) in store.tvSeries" :key="index">
            <TvSeriesCard :title="tvSerie.name" :og_title="tvSerie.original_name" :language="tvSerie.original_language"
                :vote="tvSerie.vote_average" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.container {
    padding: 0 10px
}
</style>
