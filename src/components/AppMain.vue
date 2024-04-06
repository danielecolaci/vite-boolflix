<script>
export default {
    name: 'AppMain',
    props: ['movies', 'series', 'searched'],
    data() {
        return {
            languages: ['ar', 'de', 'en', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 'pt', 'ru', 'zh'],
        }
    },
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
        },
        isFlag(lang) {
            if (this.languages.includes(lang)) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>

<template>
    <div class="back">
        <img src="/image/background.jpg" alt="">
        <div class="gradient"></div>
    </div>
    <main>

        <div class="hello" v-if="!searched">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h3>Search your favorite Movies and Series</h3>
        </div>

        <h2 v-if="movies.length > 0">Results Movies</h2>
        <div class="list flex" v-if="movies.length > 0">
            <div class="content flex" v-for="movie in movies" :key="movie.id">
                <div class="image">
                    <img :src="imageUrl(movie.poster_path)" alt="">
                </div>
                <div class="info">
                    <h3>{{ movie.title }}</h3>
                    <h6 v-if="movie.title !== movie.original_title">{{ movie.original_title }}</h6>

                    <div v-if="isFlag(movie.original_language)">
                        <img :src="'/image/flag/' + movie.original_language + '.png'" alt="" width="20px">
                    </div>
                    <p v-else>Language: {{ movie.original_language }}</p>

                    <p>{{ movie.overview }}</p>

                    <div v-if="movie.vote_count !== 0" class="vote">
                        <i v-for="star in 5" :key="star" :class="[starNumber(star, movie.vote_average), 'fa-star']"></i>
                        <span class="count"> ({{ movie.vote_count }})</span>
                    </div>

                    <button class="play">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
            </div>
        </div>
        <p v-else>No movies found</p>

        <h2 v-if="series.length > 0">Results Tv Series</h2>
        <div class="list flex" v-if="series.length > 0">
            <div class="content flex" v-for="serie in series" :key="serie.id">
                <div class="image">
                    <img :src="imageUrl(serie.poster_path)" alt="">
                </div>
                <div class="info">
                    <h5>{{ serie.name }}</h5>
                    <h6 v-if="serie.name !== serie.original_name">{{ serie.original_name }}</h6>

                    <div v-if="isFlag(serie.original_language)">
                        <img :src="'/image/flag/' + serie.original_language + '.png'" alt="" width="20px">
                    </div>
                    <p v-else>Language: {{ serie.original_language }}</p>

                    <p>{{ serie.overview }}</p>

                    <div v-if="serie.vote_count !== 0" class="vote">
                        <i v-for="star in 5" :key="star" :class="[starNumber(star, serie.vote_average), 'fa-star']"></i>
                        <span class="count"> ({{ serie.vote_count }})</span>
                    </div>

                    <button class="play">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
            </div>
        </div>
        <p v-else>No series found</p>
    </main>
</template>

<style scoped>
main {
    margin: 20px 20%;
}
</style>