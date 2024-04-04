<script>
export default {
    name: 'AppMain',
    props: ['movies', 'series'],
    methods: {
        imageUrl(image) {
            const initalUrl = 'https://image.tmdb.org/t/p/';
            const size = 'w342';
            return `${initalUrl}${size}/${image}`
        },
        starNumber(star, rating) {
            if (star <= Math.round(rating / 2)) {
                return 'fa-solid';
            } else {
                return 'fa-regular';
            }
        }
    }
}
</script>

<template>
    <div>
        <h2>Results Movies</h2>
        <div class="content" v-if="movies.length > 0" v-for="movie in movies" :key="movie.id">
            <div class="image">
                <img :src="imageUrl(movie.poster_path)" alt="">
            </div>
            <div class="info">
                <h5>{{ movie.title }}</h5>
                <h6 v-if="movie.title !== movie.original_title">{{ movie.original_title }}</h6>
                <p>{{ movie.original_language }}</p>
                <div>
                    <i v-for="star in 5" :key="star" :class="[starNumber(star, movie.vote_average), 'fa-star']"></i>
                </div>
            </div>
        </div>
        <p v-else>No movies found</p>

        <h2>Results Tv Series</h2>
        <div class="content" v-if="series.length > 0" v-for="serie in series" :key="serie.id">
            <div class="image">
                <img :src="imageUrl(serie.poster_path)" alt="">
            </div>
            <div class="info">
                <h5>{{ serie.name }}</h5>
                <h6 v-if="serie.name !== serie.original_name">{{ serie.original_name }}</h6>
                <p>{{ serie.original_language }}</p>
                <div>
                    <i v-for="star in 5" :key="star" :class="[starNumber(star, serie.vote_average), 'fa-star']"></i>
                </div>
            </div>
        </div>
        <p v-else>No series found</p>
    </div>
</template>

<style scoped></style>