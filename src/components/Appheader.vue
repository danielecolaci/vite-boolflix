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
    <header class="flex">
        <div class="logo">
            <img src="../../public/image/logo_boolflix.png" alt="">
        </div>
        <div class="search">
            <input type="text" placeholder="Search Movies or TvShows" v-model="query" @keyup.enter="search">
            <button @click="search">Search</button>
        </div>
    </header>
</template>

<style scoped>
header {
    align-items: center;
    justify-content: space-between;
    margin: 20px 20%;
}

.logo img {
    width: 160px;
}

input {
    border: 1px solid grey;
    background: transparent;
    padding: 6px 12px;
    border-radius: 8px;
    color: white
}

button {
    background-color: red;
    border: none;
    padding: 6px 12px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    margin-left: 20px;
}
</style>