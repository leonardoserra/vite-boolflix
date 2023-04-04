<script>
import { store } from "../store.js";
export default {
    name: "MySelectMovie",
    props: {
        moviesGenres: Array
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="select-container">
        <label for="movieGenres">Filtra per genere:&nbsp;</label>
        <select name="movieGenres" id="movieGenres" v-model="store.selectedMovieGenre">
            <option value="">-Seleziona genere-</option>
            <option v-for="genre in moviesGenres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.select-container {
    height: 35px;
}
</style>