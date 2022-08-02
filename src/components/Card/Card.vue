<script>
import Comment from "./Comment.vue"
import Avatar from "./Avatar.vue"
export default{
    name: "Card",
    components:{
        Comment,
        Avatar
    },
    props: ["email", "content", "url", "comments"]
}
</script>

<template>
<div class="card box-sizing w-100 m-auto shadow-lg border border-white mt-5" style="border-radius: 1rem;">
    <div class="card-header border-bottom-0 bg-white" style="border-top-left-radius: 1rem;border-top-right-radius: 1rem;">
      <img src="3.png" 
         class="rounded-circle me-3" 
         style="width: 50px; height: 50px;" 
         alt="Avatar" />
         <span>{{ email }}</span> 
         
    </div>
    
    <div class="card-body pt-1">
			<img v-if="url" :src="url" class="card-img-top" alt="Img description">
            <div class="card-body">
                <p class="card-text">{{ content }}</p>
                <hr class="dropdown-diviser pb-2" />
                <div v-for="comment in comments" :key="comment.id"><Comment :email="comment.user" :content="comment.content"></Comment></div>

                <div class="d-flex mt-3">
                 <Avatar></Avatar>
                 <input style="border-radius: 25rem;" type="text" class="form-control" placeholder="Commenter" aria-label="Commentaire"/>
                 <button style="border-radius: 25rem;" class="ms-2 ps-3 pe-3 btn btn-danger btn-block" type="submit"><i class="fa-solid fa-circle-chevron-right"></i></button>
            </div>
        </div>
	</div>
</div>
</template>

<style>
.dropdow-diverser{
    color: black;
}

</style>