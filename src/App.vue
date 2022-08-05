<script>
import Navbar from "./components/layout/Navbar.vue"
import Footer from "./components/layout/footer.vue"

export default {
name: "App",
components: {
   Navbar,
   Footer
 }
}
</script>

<template>
<Navbar />
<router-view></router-view>
<Footer />

</template>

<style>
</style>