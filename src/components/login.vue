<script>
export default {
name : "login"
}

</script>

<template>
    <section class="bg-image d-flex justify-content-center" style="background-image: url('network.jpg');height: 100vh;">
		<div class="container h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-12 col-md-8 col-lg-6 col-xl-5">
					<div class="card shadow-lg border border-white" style="border-radius: 1rem;">
						<div class="card-body p-5 ">
							<img alt="" class="mx-auto d-flex mb-5 img-fluid" height="66,42" src="/groupomania-1.png" width="300">
							<h3 class="mb-4 text-center">S'inscrire</h3>
							<div class="form-floating mb-4">
								<input style="border-radius: 25rem;" class="form-control" id="floatingInput" placeholder="name@example.com" type="email"> <label for="floatingInput" class="ms-3 text-muted">Email</label>
							</div>
							<div class="form-floating mb-5">
								<input style="border-radius: 25rem;" class="form-control" id="floatingPassword" placeholder="Password" type="password"> <label for="floatingPassword" class="text-muted ms-3">Mot de passe</label>
							</div><button style="border-radius: 25rem;" class=" mx-auto d-flex btn btn-danger mb-3 btn-lg ps-5 pe-5 btn-block" type="submit">s'inscrire</button>
						</div>
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
</style>
