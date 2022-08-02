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
		const token = JSON.parse(localStorage.getItem('data'))
		if (token == null){
			this.$router.push("/login")
		}
	},
	mounted(){
     const url = "http://localhost:3000/posts"
	 const options = {
		headers: {
		  Authorization: `Bearer ${localStorage.getItem("token")}`,
  		 "Accept": "application/json"
		}
	 }
	 fetch(url, options)
	 	.then((res) => {
			if (res.status === 200){
				return res.json()
			}else {
				this.$router.push("/login")
			}
		})
		.then((res) => {
			const {email, posts} = res
			this.posts = posts
			this.email = email
		})
		.catch((err) => console.log("err:", err))
  },
  data(){
    return {
		posts: [],
		email: null
	}
  }
}

</script>

<template>
	<section class="bg-image d-flex justify-content-center" style="background-color: #F3E9E8;">
		<div v-if="email" class="container-fluid">
			<div class="row d-flex justify-content-center align-items-center mt-5">
				<div class="col-12 col-md-8 col-lg-6 col-xl-5">
					<Post></Post>
					<div v-for="post in posts" :key="post.id">
					<card :email="post.user" :content="post.content" :url="post.url" :comments="post.comments"></card>
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
</style>