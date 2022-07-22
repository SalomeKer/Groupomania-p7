<script>
export default {
    name: "Post"
}

</script>

<template>
<section class="bg-image d-flex justify-content-center" style="background-image: url('network.jpg');height: 100vh;">
		<div class="container h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-12 col-md-8 col-lg-6 col-xl-5">
					<div class="card shadow-lg border border-white" style="border-radius: 1rem;">
						<div class="card-body p-5 ">
							<h3 class="mb-4 text-center">S'inscrire</h3>
                            <div class="form-floating">
                                <textarea class="form-control mb-4 " placeholder="Mon message" id="floatingTextarea"></textarea>
                                <label class="text-muted" for="floatingTextarea">Mon commentaire</label>
                             </div>
                             <div class="icon d-flex">
                            
                                <label for="file-input" class="p-auto btn btn-lg btn-block"><i class="fs-2 fa-regular fa-image"></i></label>
                                <button class="p-auto btn btn-lg btn-block" type="submit"><i class="fs-2 fa-regular fa-trash-can"></i></button>
                                <input id="file-input" type="file"/>
                            <button style="border-radius: 25rem;" class=" ms-auto btn btn-danger btn-lg btn-block" type="submit">Envoyer</button></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');
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