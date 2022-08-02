<script>
export default{
    name: "Post",
	data: function () {
		return {
			content: "",
		};
	},
	methods: {
		handleClick(){
		const url = "http://localhost:3000/posts"

		const options = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json",
  				"Accept": "application/json"
			},
			method: "POST",
			body: JSON.stringify({
				content: this.content
			})
		}
		
		fetch(url, options)
			.then((res) => {
				if (res.status === 200){
					return res.json
				}else {
					throw new Error("failed to fetch posts")
				}
			})
		    .then(() => {
				this.$router.go()
			})
			.catch((err) => console.log("err:", err))
		}
	}
}
</script>

<template>
    <div class="card w-100 shadow-lg border border-white" style="border-radius: 1rem;">
		<div class="card-body p-4">
			<h3 class="mb-4">Partager</h3>
			<div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" v-model="content"></textarea>
                 <label class="text-muted" for="floatingTextarea2">Écrivez quelque chose !</label>
                    </div>
			<div class="icon d-flex">
				<label class="btn-secondary ms-auto btn btn-lg btn-block" for="file-input" style="border-radius: 25rem;"><i class="fs-4 fa-regular fa-image"></i></label> <input id="file-input" type="file">
				<button @click="handleClick" class="ms-2 btn btn-danger btn-lg btn-block" style="border-radius: 25rem;" type="submit">Envoyer</button>
			</div>
			{{ content }}
		</div>
	</div>
</template>

<style></style>


