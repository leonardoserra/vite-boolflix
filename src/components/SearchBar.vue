<script>
import { store } from "../store.js";

export default {
    name: 'SearchBar',
    data() {
        return {
            store
        }
    },
    emits: ['clickSearch']
}
</script>
<template>
    <div class="my-header">
        <div class="logo-section">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="search-section">
            <button @click="$emit('clickSearch')">Cerca</button>
            <input @keyup.enter="$emit('clickSearch')" type="text" v-model="store.search" placeholder="cerca per nome.." />
        </div>
    </div>
</template>
<style scoped lang="scss">
.my-header {
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    background-color: black;
    align-items: center;

    .logo-section {
        color: red;

    }


    .search-section {

        height: 50px;
        display: flex;
        justify-content: end;
        gap: 5px;
        padding: 10px 0;

        button,
        input {
            padding: 0 5px;
        }

    }
}
</style>
