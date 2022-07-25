<script>
import Comment from "./Comment.vue"
import Avatar from "./Avatar.vue"
export default{
    name: "Card",
    components:{
        Comment,
        Avatar
    }
}
</script>

<template>
<div class="card box-sizing w-100 m-auto shadow-lg border border-white mt-5" style="border-radius: 1rem;">
    <div class="card-header border-bottom-0 bg-white" style="border-top-left-radius: 1rem;border-top-right-radius: 1rem;"><img src="3.png" class="rounded-circle me-3" style="width: 50px; height: 50px;" alt="Avatar" />Pierre Dupont</div>
		<div class="card-body pt-1">
			<img class="card-img-top" src="groupe.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Groupomania</h5>
                <p class="card-text">La direction a promis des mesures d’amélioration de la communication entre collègues, notamment la mise en place d’un nouvel outil numérique.Il s’agit de la création d’un réseau social interne moderne, qui permettra aux employés de se connaître dans un cadre plus informel.</p>
                <hr class="dropdown-diviser pb-2" />
                <Comment></Comment>
                <Comment></Comment>

                <div class="d-flex mt-3">
                 <Avatar></Avatar>
                 <input style="border-radius: 25rem;" type="text" class="form-control" placeholder="Commenter" aria-label="Commentaire"/>
                 <button style="border-radius: 25rem;" class="ms-2 ps-3 pe-3 btn btn-danger btn-block" type="submit">Envoyer</button>
            </div>
        </div>
	</div>
</div>
</template>

<style>
.dropdow-diverser{
    color: black;
}

</style>