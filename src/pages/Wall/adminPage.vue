<script>
import Card from "../../components/Card/Card.vue"
import Post from "./Post.vue"
import { getUrlAndHeaders } from "./../../../services/fetchOptions"

export default {
    name: "adminPage",
	components:{
		Card,
		Post
	},
	methods: {
    redirectToLoginIfNoToken() {
      const reloaded = localStorage.getItem('reloaded');
   if (reloaded !== 'true') {
       localStorage.setItem('reloaded', 'true');
       location.reload();
   }
      const token = localStorage.getItem("token")
      console.log("token:", token)
      if (token == null) {
        this.$router.push("/login")
      }
      const role = localStorage.getItem("role")
        console.log("role:", role)
      if (role !== "admin") {
        alert("you are not an admin")
        this.$router.push("/home")
      }
    }
  },
	mounted() {
    this.redirectToLoginIfNoToken()
    const { url, headers } = getUrlAndHeaders()
    const options = {
      headers: { ...headers }
    }
    console.log("options:", { ...options })
    fetch(url + "posts/", options)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error("Failed to fetch posts")
        }
      })
      .then((res) => {
        console.log("res:", res)
        const { email, posts, userLogged } = res
        this.posts = posts
        this.currentUser = email
        this.userLogged = userLogged
      })
      .catch((err) => console.log("err:", err))
  },
  data() {
    return {
      posts: [],
      currentUser: null
    }
  }
}

</script>

<template>
	<p class="text-center welcomText m-0">Bienvenue {{ currentUser }} !</p>
	<section v-if="currentUser" class="bg-image d-flex justify-content-center" style="background-color: #F3E9E8;">
		<div class="container-fluid">
			<div class="row d-flex justify-content-center align-items-center mt-5">
				<div class="col-12 col-md-8 col-lg-6 col-xl-5">
					<div v-for="post in posts" :key="post.id">
					<card 
					 :currentUser="currentUser"
       				 :email="post.user.email"
        			 :content="post.content"
        			 :url="post.imageUrl"
        			 :comments="post.comments"
               :id="post.id"
               :likeCount="post.likes.length"
               :liked="post.likes.some(like => like.email === currentUser)"
               :role="userLogged.role"
               >
					</card>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
section{
 font-family: Lato;
}
input{
    display: none;
}
.btn {
    border: none;
}
.welcomText{
	background-color: #bb2d3b;
	padding: 6px;
	font-weight: bold;
	color: white;
}
</style>
 