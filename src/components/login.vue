<script>
export default {
name : "login"
}

</script>

<template>
    <section class="bg-image d-flex justify-content-center align-items-center" style="background-image: url('network.jpg');height: 100vh;">
		<div class="container h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-12 col-md-8 col-lg-6 col-xl-5">
					<div class="card shadow-lg" style="border-radius: 1rem;">
						<div class="card-body p-5 text-center">
							<img alt="" class="mb-5 img-fluid" height="66,42" src="/groupomania-1.png" width="300">
							<h3 class="mb-4">S'inscrire</h3>
							<div class="form-floating mb-4">
								<input class="form-control" id="floatingInput" placeholder="name@example.com" type="email"> <label for="floatingInput">Email</label>
							</div>
							<div class="form-floating mb-5">
								<input class="form-control" id="floatingPassword" placeholder="Password" type="password"> <label for="floatingPassword">Mot de passe</label>
							</div><button class="btn btn-danger btn-lg btn-block" type="submit">s'inscrire</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
</style>
