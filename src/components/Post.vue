<script>
export default{
    name: "Post"
}
</script>

<template>
<div class="card w-100 shadow-lg border border-white" style="border-radius: 1rem;">
				<div class="card-body p-5 ">
							<h3 class="mb-4">Mon commentaire</h3>
                            <div class="form-floating">
                                <textarea class="form-control mb-4 " placeholder="Mon message" id="floatingTextarea"></textarea>
                                <label class="text-muted" for="floatingTextarea">Mon commentaire</label>
                             </div>
                             <div class="icon d-flex">
                        <label for="file-input" style="border-radius: 25rem;" class="btn-secondary ms-auto btn btn-lg btn-block"><i class="fs-4 fa-regular fa-image"></i></label>
                         <input id="file-input" type="file"/>
                    <button style="border-radius: 25rem;" class="ms-2 btn btn-danger btn-lg btn-block" type="submit">Envoyer</button>
                    </div>
				</div>
			</div>
</template>

<style></style>