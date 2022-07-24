<script>
import loginPage from "./pages/loginPage.vue"
import Navbar from "./components/layout/Navbar.vue"

export default {
name: "App",
components: {
   loginPage,
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