<script>
import { getUrlAndHeaders } from "./../../services/fetchOptions"
import axios from "axios"
export default {
  name: "LoginPage",
  data() {
    return {
      username: "salome.k@gmail.com",
      password: "123456",
      confirmPassword: "123456",
      HasInvalidData: false,
      error: null,
      isLoginMode: true
    }
  },
  methods: {
    loginUser,
    setFormValidity,
    toggleLoginMode() {
      this.isLoginMode = !this.isLoginMode
    },
    signUp: async function (email, password, confirmPassword, router) {
      const { url } = getUrlAndHeaders()
      const body = JSON.stringify({
        email,
        password,
        confirmPassword
      })
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
      try {
        await axios.post(url + "auth/signup", body, options)
        console.log("router:", router)
        this.$router.go("/")
      } catch (err) {
        const error = err.response.data.error
        this.error = error
        throw new Error("Failed to signup:" + error)
      }
    }
  },
  watch: {
    username(value) {
      const isValueEmpty = value === ""
      this.setFormValidity(!isValueEmpty)
      this.error = null
    },
    password(value) {
      const isValueEmpty = value === ""
      this.setFormValidity(!isValueEmpty)
      this.error = null
    }
  }
}
function setFormValidity(bool) {
  console.log("setFormValidity:", bool)
  this.HasInvalidData = !bool
}
function loginUser(email, password, router, store) {
  const { url } = getUrlAndHeaders()
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  }
  fetch(url + "auth/login", options)
    .then((res) => {
      if (res.ok) return res.json()
      res.text().then((err) => {
        const { error } = JSON.parse(err)
        this.error = error
        throw new Error(error)
      })
    })
    .then((res) => {
      const token = res.token
      localStorage.clear()
      localStorage.setItem("token", token)
      let tokenInCache
      while (tokenInCache == null) {
        tokenInCache = localStorage.getItem("token")
      }
      this.$router.push("/home")
    })
    .catch((err) => {
      console.error(err)
    })
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
							<h3 class="mb-4 text-center">{{this.isLoginMode ? "Connexion" : "Inscription"}}</h3>
							<div class="form-floating mb-4">
								<input type="email" style="border-radius: 25rem;" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="username" required="true" @invalid="isFormValid" /> 
								<label for="floatingInput" class="ms-3 text-muted">Email*</label>
							</div>
							<div class="form-floating mb-4">
								<input style="border-radius: 25rem;" 
								type="password" 
								class="form-control" 
								id="floatingPassword" 
								placeholder="Password" 
								v-model="password" 
								required="true"  
								@invalid="isFormValid" 
								/>
								<label for="floatingPassword" class="text-muted ms-3">Mot de passe*</label>
								</div> 
								<div v-if="!isLoginMode" class="form-floating mb-5">
								<input style="border-radius: 25rem;" 
								type="password" 
								class="form-control" 
								placeholder="Confirm password" 
								v-model="Confirmpassword" 
								required="true"  
								@invalid="isFormValid" 
								/>
								<label for="floatingPassword" class="text-muted ms-3">Confirmer le mot de passe*</label>
								</div> 
								<span v-if="HasInvalidData" class="messageError">Veuillez remplir tous les champs obligatoires</span>
								<span v-if="!HasInvalidData && error" class="messageError">{{ error }}</span>
							<button v-if="isLoginMode" style="border-radius: 25rem;" class=" mx-auto d-flex btn btn-danger mb-3 btn-lg ps-5 pe-5 btn-block" type="submit" @click.prevent="()=> 
							loginUser(this.username, this.password)" :disabled="HasInvalidData">
							Connexion
							</button>
							<button v-else style="border-radius: 25rem;" class=" mx-auto d-flex btn btn-danger mb-3 btn-lg ps-5 pe-5 btn-block" type="submit" @click.prevent=" ()=>signUp(this.username, this.password, this.confirmPassword, this.$router)" :disabled="HasInvalidData">
							Inscription
							</button>
							<p class="d-flex justify-content-center mt-5 mb-1 subLink" @click.prevent="toggleLoginMode"><a class="ps-1" href="#">{{this.isLoginMode ? "Inscrivez-vous !" : "Se connecter"}}</a></p>
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
	padding-bottom: 20px;
	justify-content: center;
	color: red;
}
section{
 font-family: Lato;
}
a { color: #FF0000; 
font-weight: bold;
}

</style>