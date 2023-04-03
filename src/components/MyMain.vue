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
    <main>

        <div v-if="!store.movies.length && !store.tvSeries.length" class="request">
            <h2>Cerca qualcosa, i risultati appariranno qui..</h2>
        </div>
        <div v-else class="monitor">
            <section>
                <h1 v-show="store.movies.length" class="category">Movies</h1>
                <div class="container">
                    <div class="movie-card" v-for="(movie, index) in store.movies" :key="index">
                        <MovieCard :title="movie.title" :og_title="movie.original_title" :language="movie.original_language"
                            :vote="movie.vote_average" :poster_img="movie.poster_path" />
                    </div>
                </div>

            </section>
            <section>
                <h1 v-show="store.tvSeries.length" class="category">Tv Series</h1>
                <div class="container">
                    <div class="tv-series-card" v-for="(tvSerie, index) in store.tvSeries" :key="index">
                        <TvSeriesCard :title="tvSerie.name" :og_title="tvSerie.original_name"
                            :language="tvSerie.original_language" :vote="tvSerie.vote_average"
                            :poster_img="tvSerie.poster_path" />
                    </div>
                </div>

            </section>
        </div>

    </main>
</template>


<style scoped lang="scss">
.category {
    padding: 0 20px;
    background-color: rgb(0, 0, 0);
    color: white;
    height: 50px;
    line-height: 50px;
}

.container {
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .movie-card,
    .tv-series-card {
        margin: 0 10px;
        width: calc(100% / 5 - 20px);
    }
}
</style>
