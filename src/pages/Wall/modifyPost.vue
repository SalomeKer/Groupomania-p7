<script>
import axios from "axios"
export default {
    name: "modify",
    props: ["id", "email", "url"],
    data(){
        return {
         content: "",
         image: null,
        }
    },

  mounted() {},
  methods: {
    selectionOfFiles(e) {
      this.image = e.target.files[0];
    },
    
    modifyPost() {
      const id = this.$props.id;
      const email = this.$props.email;
      const newImage = this.image;
      const url = "http://localhost:3001/home/modify/" + this.$props.id;
      const formData = new FormData();
      formData.append("content", this.content);
      formData.append("image", this.image);
      fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(() => {
          location.assign("http://localhost:3001/home");
        })
        .catch((error) => console.error("Erreur du front :", error));
    },
  },
}
</script>

<template>
<headerHome />
    <div class="card w-100 shadow-lg border border-white" style="border-radius: 1rem;">
		<div class="card-body p-4">
      <div class="d-flex"><router-link to="/home"><i class="btn-lg fa-solid fa-angle-left"></i></router-link>
			<h3 class="mb-4">Modifier</h3></div>
			<div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" v-model="content"></textarea>
                 <label class="text-muted" for="floatingTextarea2">Écrivez quelque chose !</label>
                    </div>
			<div class="icon d-flex">
				<label class="btn-secondary ms-auto btn btn-lg btn-block" for="file-input" style="border-radius: 25rem;">
				<i class="fs-4 fa-regular fa-image"></i></label>
				<input id="file-input" type="file" @change="selectionOfFiles">
				<button @click="modifyPost" class="ms-2 btn btn-danger btn-lg btn-block" style="border-radius: 25rem;" type="submit">Envoyer</button>
               </div></div>
	</div>
</template>

<style>
.fa-angle-left{
  color: red;
  font-size: 30px;
  padding-right: 10px;
}
</style>