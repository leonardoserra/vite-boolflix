<script>
import { store } from "../store.js";
export default {
    name: "MySelect",
    props: {
        moviesGenres: Array,
        tvSeriesGenres: Array
    }
}
</script>

<template>
    <div class="container">
        <label for="movieGenres">Filtra per genere:&nbsp;</label>
        <select name="movieGenres" id="movieGenres">
            <option value="">-Seleziona genere-</option>
            <option v-for="genre in moviesGenres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
    </div>

    <div class="container">
        <label for="tvSeriesGenres">Filtra per genere:&nbsp;</label>
        <select name="tvSeriesGenres" id="tvSeriesGenres">
            <option value="">-Seleziona genere-</option>
            <option v-for="genre in tvSeriesGenres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.container {
    height: 35px;

}
</style>