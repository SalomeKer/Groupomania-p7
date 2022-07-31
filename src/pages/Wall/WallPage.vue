<script>
import Card from "../../components/Card/Card.vue"
import Post from "./Post.vue"
export default {
    name: "WallPage",
	components:{
		Card,
		Post
	},
	beforeCreated(){
		const token = localStorage.getItem("token")
		if (token == null){
			this.$router.push("/login")
		}
	},
	mounted(){
     const url = "http://localhost:3000/posts"

	 const options = {
		headers: {
		  Autorization: `Bearer ${localStorage.getItem("token")}`	
		}
	 }
	 fetch(url, options)
	 	.then((res) => res.json())
		.then((res) => {
			
			this.posts = res
			console.log("this.posts :", this.posts)
		})
		.catch((err) => console.log("err:", err))
  },
  data(){
    return {
		posts: []
	}
  }
}
</script>

<template>
	<section class="bg-image d-flex justify-content-center" style="background-color: #F3E9E8;">
		<div class="container-fluid">
			<div class="row d-flex justify-content-center align-items-center mt-5">
				<div class="col-12 col-md-8 col-lg-6 col-xl-5">
					<Post></Post>
					<div v-for="post in posts" :key="post.id"><card></card></div>
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
</style>