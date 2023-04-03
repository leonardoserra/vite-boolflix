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
        <button @click="$emit('clickSearch')">Cerca</button>
        <input @keyup.enter="$emit('clickSearch')" type="text" v-model="store.search" placeholder="cerca per nome.." />
    </div>
</template>
<style scoped lang="scss">
.my-header {
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
</style>
