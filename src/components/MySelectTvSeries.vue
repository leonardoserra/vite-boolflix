<script>
import { store } from "../store.js";
export default {
    name: "MySelectTvSeries",
    props: {
        tvSeriesGenres: Array
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
        <label for="tvSeriesGenres">Filtra per genere:&nbsp;</label>
        <select name="tvSeriesGenres" id="tvSeriesGenres" @change="$emit('tvSerieFilterEvent')"
            v-model="store.selectedTvSerieGenre">
            <option value="">-Seleziona genere-</option>
            <option v-for="genre in tvSeriesGenres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.select-container {
    height: 35px;
}
</style>