<script>


export default {
    name: 'MovieCard',
    props: {
        title: String,
        og_title: String,
        language: String,
        vote: Number
    }
}
</script>
<template>
    <div class="container">

        <div class="card">
            <div class="element">{{ title }}</div>
            <div class="element">{{ og_title }}</div>
            <div class="element">{{ language }}</div>
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
    }
}
</style>
