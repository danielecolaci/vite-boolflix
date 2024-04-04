<script>
export default {
    name: 'AppMain',
    props: ['movies']
}
</script>

<template>
    <div>
        <h3>Results</h3>
        <ul v-if="movies.length > 0">
            <li v-for="movie in movies" :key="movie.id">
                <h5>{{ movie.title }}</h5>
                <h6 v-if="movie.title !== movie.original_title">{{ movie.original_title }}</h6>
                <p>{{ movie.original_language }}</p>
                <p>{{ movie.vote_average }}</p>
            </li>
        </ul>
        <p v-else>Nothing found</p>
    </div>
</template>

<style scoped></style>