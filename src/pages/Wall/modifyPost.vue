<script>
import { getUrlAndHeaders } from "./../../../services/fetchOptions"
import axios from "axios"
export default {
    name: "modify",
    props: ["id", "email", "url","content"],
    data(){
        return {
         content: this.$props.content,
         image: null,
        }
    },

  mounted() {},
  methods: {
    selectionOfFiles(e) {
      this.image = e.target.files[0];
      console.log('ed',this.image.name)
    },
    
    modifyPost() {
      console.log("id of the post to modify:", this.$props.url)
      const id = this.$props.id;
      const { url, putHeaders } = getUrlAndHeaders();
      const options = {
      headers: putHeaders,
			method: "PUT",
			body: JSON.stringify({
        content: this.content,
        imageUrl: this.image === null ? this.$props.url : this.image.name,
        oldImageUrl: this.$props.url
      })};
      fetch(url + "posts/" + id, options)
        .then((res) => {
          console.log("res:", res);
				if (res.status === 200){
					return res.json
				}else {
					throw new Error("failed to fetch posts")
				}
			})
        .then(() => {
          window.location.assign("/home")
        })
        .catch((error) => console.error("Erreur du front :", error));
    },uploader(){
      const id = this.$props.id;  
    const { url, headers } = getUrlAndHeaders();
    const formData = new FormData();
    formData.append("image", this.image);
    const option = {
                headers,
                method: "POST",
                body: formData
		                    };
          fetch(url + "posts/upload/" + id , option)
            .then((res) => {
              if (res.status === 200) {
                return res.json()
              } else {
                throw new Error("Failed to fetch posts")
              }
            })
            .then((res) => {
              console.log("res:", res);
            })
            .catch((err) => console.log("err:", err))
  }
  }
}
</script>

<template>
<section style="background-color: #F3E9E8">
<div class="container-fluid h-75 w-75 p-4">
    <div class="card w-100 shadow-lg border border-white" style="border-radius: 1rem;">
		<div class="card-body p-4">
      <div class="d-flex"><router-link to="/home"><i class="btn-lg fa-solid fa-angle-left"></i></router-link>
			<h3 class="mb-4">Modifier</h3></div>
			<div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" v-model="content">{content}</textarea>
                 <label class="text-muted" for="floatingTextarea2">Écrivez quelque chose !</label>
                    </div>
			<div class="icon d-flex">
				<label class="btn-secondary ms-auto btn btn-lg btn-block" for="file-input" style="border-radius: 25rem;">
				<i class="fs-4 fa-regular fa-image"></i></label>
				<input id="file-input" type="file" @change="selectionOfFiles">
				<button @click="uploader();modifyPost()" class="ms-2 btn btn-danger btn-lg btn-block" style="border-radius: 25rem;" type="submit">Envoyer</button>
        </div></div>
	</div>
  </div>
  </section>
</template>

<style>
.fa-angle-left{
  color: red;
  font-size: 30px;
  padding-right: 10px;
}
</style>