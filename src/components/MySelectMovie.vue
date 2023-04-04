<script>
import { store } from "../store.js";
export default {
    name: "MySelectMovie",
    props: {
        moviesGenres: Array
    }
}
</script>

<template>
    <div class="select-container">
        <label for="movieGenres">Filtra per genere:&nbsp;</label>
        <select name="movieGenres" id="movieGenres">
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