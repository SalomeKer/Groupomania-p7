<script>
export default {
    name: "Navbar",
    data(){
      return{
        isLoggedIn: false
      }
    },
    created(){
      const token = localStorage.getItem("token")
      if (token != null){
        this.isLoggedIn = true
      }
    },
    methods: {
      logOut(){
        this.$router.push("/login")
        localStorage.clear(), sessionStorage.clear()
        this.$router.push("/login")

      }
    }
}
</script>

<template>
<nav class="navbar navbar-expand-md bg-dark navbar-dark bg-dark">

<a class="ps-4 navbar-brand"><router-link to="/home"><img src="/public/icon-left-font-monochrome-white.png" alt="Logo" style="width:140px;"></router-link></a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  
  <div class="collapse navbar-collapse db-flex flex-row-reverse pe-4" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item ps-2">
        <router-link v-if="!this.isLoggedIn" class="text-decoration-none" to="/login"><a class="nav-link">Connexion</a></router-link>
      </li>
      <li class="nav-item ps-2">
        <a @click="logOut" v-if="this.isLoggedIn" class="nav-link text-decoration-none" to="#">déconnexion</a>
      </li>
    </ul>
  </div>
</nav>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');
nav{
 font-family: Lato;
}
</style>