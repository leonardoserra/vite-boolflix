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
    <input type="text" v-model="store.search" placeholder="cerca per nome.." />
    <!--per debug-->
    <div>{{ store.search }}</div>
</template>
<style scoped lang="scss"></style>
