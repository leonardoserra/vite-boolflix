<script>
import { store } from "../store.js";

export default {
    name: 'SearchBar',
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <button @click="$emit('clickSearch')">Cerca</button>
    <input @keyup.enter="$emit('clickSearch')" type="text" v-model="store.search" placeholder="cerca per nome.." />
</template>
<style scoped lang="scss"></style>
