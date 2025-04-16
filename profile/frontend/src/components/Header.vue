<template>
    <header>
        <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/portfolio">Portfolio</router-link></li>
            <li><router-link to="/about">About Me</router-link></li>
        </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "AppHeader",
    };
</script>

<style scoped>
@import '../assets/styles/header.css'

</style>