<script>
import Card from "./Card.vue"
import Post from "./Post.vue"
export default {
    name: "Wall",
	components:{
		Card,
		Post
	}
}
</script>

<template>
	<section class="bg-image d-flex justify-content-center" style="background-color: #F3E9E8;">
		<div class="container-fluid">
			<div class="row d-flex justify-content-center align-items-center mt-5">
				<div class="col-12 col-md-8 col-lg-6 col-xl-5">
					<Post></Post>
					<Card></Card>
					<Card></Card>
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