<script>

export default {
    name: 'MovieCard',

    props: {
        title: String,
        og_title: String,
        language: String,
        vote: Number
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`/flag_${img}.png`, import.meta.url).href;
        }
    }
}
</script>
<template>
    <div class="container">

        <div class="card">
            <div class="element">{{ title }}</div>
            <div class="element">{{ og_title }}</div>
            <img v-if="language == 'ja'" class="image" src="../../public/flag_ja.png" alt="flag_japan">
            <img v-else-if="language == 'en'" class="image" src="/flag_en.png" alt="flag_uk">
            <img v-else-if="language == 'es'" class="image" src="/flag_es.png" alt="flag_spain">
            <img v-else-if="language == 'it'" class="image" src="/flag_it.png" alt="flag_italy">
            <div v-else class="element">{{ language }}</div>
            <!-- <img :src="getImagePath(this.language)" :alt="language" class="element" /> -->

            <div class="element">{{ vote }}</div>
        </div>

    </div>
</template>
<style scoped lang="scss">
.container {
    .card {
        margin: 20px 0;
        padding: 10px;

        width: 300px;
        background-color: rgb(82, 252, 82);

        .element {
            margin: 5px 0;
            background-color: rgb(88, 177, 255);
        }

        .image {
            width: 30px;
        }
    }
}
</style>
