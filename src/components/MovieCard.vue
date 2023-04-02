<script>

export default {
    name: 'MovieCard',
    data() {
        return {
            image_path: 'https://image.tmdb.org/t/p/w342/'
        }
    },

    props: {
        title: String,
        og_title: String,
        language: String,
        vote: Number,
        poster_img: String
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

            <div class="img-wrapper">
                <img class="element poster" :src="image_path + poster_img" :alt="title" />
            </div>
            <img v-if="language == 'ja'" class="image" src="/flag_ja.png" alt="flag_japan">
            <img v-else-if="language == 'en'" class="image" src="/flag_en.png" alt="flag_uk">
            <img v-else-if="language == 'es'" class="image" src="/flag_es.png" alt="flag_spain">
            <img v-else-if="language == 'it'" class="image" src="/flag_it.png" alt="flag_italy">
            <img v-else-if="language == 'fi'" class="image" src="/flag_fi.png" alt="flag_finnish">
            <img v-else-if="language == 'fr'" class="image" src="/flag_fr.png" alt="flag_france">
            <img v-else-if="language == 'de'" class="image" src="/flag_de.png" alt="flag_germany">
            <img v-else-if="language == 'cs'" class="image" src="/flag_cs.png" alt="flag_slovakia">
            <img v-else-if="language == 'ko'" class="image" src="/flag_ko.png" alt="flag_korea">
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

        .element {
            margin: 5px 0;
        }

        .image {
            width: 30px;
        }

        .img-wrapper {
            height: 400px;
            width: 280px;
            overflow: hidden;

            .element.poster {
                object-fit: cover;
                height: 400px;
                width: 280px;
            }
        }
    }
}
</style>
