<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            query: ''
        }
    },
    methods: {
        search() {
            /* console.log(this.query); */
            this.$emit('search', this.query)
        }
    }
}
</script>

<template>
    <div>
        <input type="text" placeholder="Cerca un film" v-model="query" @keyup.enter="search">
        <button @click="search">Search</button>
    </div>
</template>

<style scoped></style>