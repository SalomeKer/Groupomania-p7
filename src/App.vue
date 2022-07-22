<script>
import loginVue from "./components/login.vue"
import Navbar from "./components/Navbar.vue"

export default {
name: "App",
components: {
   loginVue,
   Navbar
 }
}
</script>

<template>
<Navbar />

<router-view></router-view>

</template>

<style>
</style>