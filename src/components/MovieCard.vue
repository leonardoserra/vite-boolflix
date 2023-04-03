<script>

export default {
    name: 'MovieCard',
    data() {
        return {
            image_path: 'https://image.tmdb.org/t/p/w342/',
            starVote: null
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
    },
    created() {
        //creo function per arrotondare per eccesso voto e divide per 2
        this.starVote = Math.ceil(this.vote / 2);
        console.log(this.title + ' voto: ' + this.starVote);
    }
}
</script>
<template>
    <div class="container">

        <div class="card">

            <div class="img-wrapper">
                <img class="element poster" :src="image_path + poster_img" :alt="title" />
                <!-- <img v-else class="element poster" src="/img_error.jpg" :alt="title" /> -->
            </div>

            <div class="info d-none">
                <div class="info-section title">
                    <span class="bold">Titolo:&nbsp;</span>
                    <span class="element">{{ title }}</span>
                </div>

                <div v-if="og_title != title" class="info-section og_title">
                    <span class="bold">Titolo Originale:&nbsp;</span>
                    <span class="element">{{ og_title }}</span>
                </div>

                <div class="info-section flag">
                    <span class="bold">Lingua:&nbsp;</span>
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
                </div>

                <!-- voto in stelle -->
                <div class="info-section star-container">
                    <span class="bold">Voto:&nbsp;</span>
                    <div v-for="star in starVote" class="element"><i class="fa-solid fa-star"></i></div>
                    <div v-for="star in (5 - starVote)" class="element"><i class="fa-regular fa-star"></i></div>
                </div>

            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
.container {
    .bold {
        font-weight: 700;
    }

    .card {
        margin: 20px 0;
        padding: 10px;
        width: 300px;

        .d-none {
            display: none;
        }

        &:hover {
            .img-wrapper {
                display: none;
            }

            .info.d-none {
                display: block;
                height: 400px;
                width: 280px;
                background-color: black;
                overflow: hidden;
                padding: 25px;

                .info-section {
                    margin-top: 15px;
                }

            }
        }

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

        .star-container {
            width: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

    }
}
</style>