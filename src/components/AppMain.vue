<script>
export default {
    name: 'AppMain',
    props: ['movies']
}
</script>

<template>
    <div>
        <h3>Results</h3>
        <ul>
            <li v-for="movie in movies" :key="movie.id">
                <h5>{{ movie.title }}</h5>
                <h6>{{ movie.orginal_title }}</h6>
                <p>{{ movie.original_language }}</p>
                <p>{{ movie.vote_average }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>