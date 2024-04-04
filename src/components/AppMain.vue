<script>
export default {
    name: 'AppMain',
    props: ['movies', 'series']
}
</script>

<template>
    <div>
        <h3>Results Movies</h3>
        <ul v-if="movies.length > 0">
            <li v-for="movie in movies" :key="movie.id">
                <h5>{{ movie.title }}</h5>
                <h6 v-if="movie.title !== movie.original_title">{{ movie.original_title }}</h6>
                <p>{{ movie.original_language }}</p>
                <p>{{ movie.vote_average }}</p>
            </li>
        </ul>
        <p v-else>No movies found</p>

        <h3>Results Tv Series</h3>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie.id">
                <h5>{{ serie.name }}</h5>
                <h6 v-if="serie.title !== serie.original_title">{{ serie.original_name }}</h6>
                <p>{{ serie.original_language }}</p>
                <p>{{ serie.vote_average }}</p>
            </li>
        </ul>
        <p v-else>No series found</p>
    </div>
</template>

<style scoped></style>