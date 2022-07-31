<script>
function submitForm( email, password ) {
const url = "http://localhost:3000/auth/login"
const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({email, password})
}
fetch(url, options)
	.then(res => {
		if (res.ok) return res.json() 
		res.text().then((err) => {
		const { error } = JSON.parse(err)
		this.error = error
		throw new Error(error)
		 })
		})
	.then((res) => {
		console.log("res:", res)
		const token = res.token
		localStorage.setItem("token", token)
		this.$router.push("/home")
		})
	.catch((err) => {
		console.log(err)
	})
}
export default {
name : "loginPage",
data,
methods:{
	submitForm,
	isFormValid
 },
//À chaque modification, watch va vérifier si la valeur est vide, si elle l'est la valeur est mauvaise, dans le cas contraire elle est bonne.
watch:{
	username(value){
	const isValueEmpty = value === ""
	this.isFormValid(!isValueEmpty)
	this.error = null
	},
	password(value){
	const isValueEmpty = value === ""
	this.isFormValid(!isValueEmpty)
	this.error = null
	}
  }
}
function isFormValid(bool){
  console.log("isFormValid:", bool)
  this.HasInvalidData = !bool
}
function data() {
	return { username: "salome.k@gmail.com", password: "123456", HasInvalidData: false,
	error: null}
}
</script>

<template>
    <section class="bg-image d-flex justify-content-center" style="background-image: url('network.jpg');height: 100vh;">
		<div class="container h-100">
			<div class="row d-flex justify-content-center pt-5 mt-5 groupoCard h-100">
				<div class="col-12 col-md-8 col-lg-6 col-xl-5">
					<div class="card shadow-lg border border-white" style="border-radius: 1rem;">
						<form :class="this.HasInvalidData ? 'hasErrors' : ''">
						<div class="card-body p-5 ">
							<img alt="" class="mx-auto d-flex mb-5 img-fluid" height="66,42" src="/groupomania-1.png" width="300">
							<h3 class="mb-4 text-center">Connexion</h3>
							<div class="form-floating mb-4">
								<input type="email" style="border-radius: 25rem;" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="username" required="true" @invalid="isFormValid" /> 
								<label for="floatingInput" class="ms-3 text-muted">Email*</label>
							</div>
							<div class="form-floating mb-5">
								<input style="border-radius: 25rem;" 
								type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" required="true"  @invalid="isFormValid" /> 
								<label for="floatingPassword" class="text-muted ms-3">Mot de passe*</label>
								<span v-if="HasInvalidData" class="messageError">Veuillez remplir tous les champs obligatoires</span>
								<span v-if="!HasInvalidData && error" class="messageError">{{ error }}</span>
							</div><button style="border-radius: 25rem;" class=" mx-auto d-flex btn btn-danger mb-3 btn-lg ps-5 pe-5 btn-block" type="submit" @click.prevent="()=> 
							submitForm(this.username, this.password)" :disabled="HasInvalidData">
							Connexion
							</button>
							<p class="mt-5 mb-3 text-muted">Value: {{ username }}</p>
							<p class="mt-2 mb-3 text-muted">Value: {{ password }}</p>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.hasErrors input{
  border: 1px solid red;
}
.messageError{
	display: flex;
	padding-top: 10px;
	justify-content: center;
	color: red;
}
section{
 font-family: Lato;
}
</style>