<script>
import Comment from "./Comment.vue"
import Avatar from "./Avatar.vue"
import modify from "../../pages/Wall/modifyPost.vue"


import { getUrlAndHeaders } from "./../../../services/fetchOptions"
export default{
    name: "Card", 
    components:{
        Comment,
        Avatar,
    },
    props: ["email", "content", "url", "comments", "id", "currentUser"],
    data(){
        return{
            currentcomment: null
        }
    },
    mounted(){},
    methods: {
        addComment(e){
          console.log(this.currentComment)
          console.log(this.$props.id)
          const { url, headers } = getUrlAndHeaders()
          const options = {
            headers: { ...headers, "Content-Type": "application/json"},
            method: "POST",
            body:JSON.stringify({
            comment: this.currentComment
           })
          }
          fetch(url + "posts/" + this.$props.id, options)
          .then((res) => {
            if (res.status === 200){
                return res.json()
            } else {
                throw new Error("failed to fetch posts")
            }
          })
          .then((res) => {
            console.log("res:", res)
            this.$router.go()
            //this.currentComment = null
          })
          .catch((err) => console.log("err:", err))
        },
     deletePost(e) {
      console.log("id of the post to delete:", this.$props.id)
      const { url, headers } = getUrlAndHeaders()
      fetch(url + "posts/" + this.$props.id, {
        headers: { ...headers, "Content-Type": "application/json" },
        method: "DELETE"
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json()
          } else {
            throw new Error("Failed to delete post")
          }
        })
        .then((res) => {
          console.log("res:", res)
          this.$router.go()
        })
        .catch((err) => console.log("err:", err))
    },
    }
}
</script>

<template>
<div class="card box-sizing w-100 m-auto shadow-lg border border-white mt-5 mb-5" style="border-radius: 1rem;">
    <div class="card-header border-bottom-0 bg-white" style="border-top-left-radius: 1rem;border-top-right-radius: 1rem;">
      <div class="m-auto pt-1 d-flex"><img src="/user.png" 
         class="rounded-circle me-3" 
         style="width: 50px; height: 50px;" 
         alt="Avatar" />
         <span class="emailAvatar">{{ email }}</span><div class="iconDiv d-flex align-items-center ms-auto">
          <div class="like"><p><i @click="likeClick" class="fas fa-heart"></i> <span class="number"></span></p></div>
         <router-link
          id="fa-pen"
          :to="{
          name: 'modify',
          params: { id: id, email: email, url: url },}"><i v-if="currentUser === email" class="fa-solid fa-pen"></i></router-link>
          <i v-if="currentUser === email" class="fa-solid fa-x" @click="deletePost"></i></div></div>
         
    </div>
    
    <div class="card-body pt-1">
			<img v-if="url" :src="url" class="card-img-top" alt="Img description">
            <div class="card-body">
                <p class="card-text">{{ content }}</p>
                <hr class="dropdown-diviser pb-2" />
                <div v-for="comment in comments" :key="comment.id">
                <Comment :email="comment.user.email" :content="comment.content"></Comment>
                </div>
                 <div class="d-flex mt-3">
                 <Avatar></Avatar>
                  <input style="border-radius: 25rem;" type="text" class="form-control" placeholder="Commenter" aria-label="Commentaire" v-model="currentComment"/>
                 <button style="border-radius: 25rem;" class="ms-2 ps-3 pe-3 btn btn-danger btn-block" type="submit" @click="addComment"><i class="fa-solid fa-circle-chevron-right"></i></button>
            </div>
        </div>
	</div>
</div>
</template>

<style>
.dropdow-diverser{
    color: black;
}
.iconDiv i{
  font-size: 20px;
  padding: 7px;
}
.like p{
  margin: 0%;
}

.emailAvatar{
    padding-top: 12px;
}

i {
  cursor: pointer;
}




</style>