<script>
import Avatar from "./Avatar.vue"
export default {
    name: "Comment",
    components: {
        Avatar
  }
}
</script>


<template>

<div class="d-flex pb-3">
    <Avatar />
    <div style="border-radius: 1rem;" class="blocComment w-75 d-flex flex-column p-2">
        <p class=" NomPrenom mb-0">Anne DRH</p>
        <p class="mb-0 pb-1">Super !</p>
    </div>
</div>

</template>


<style>
.blocComment{
    background-color: #F0F2F5;
}
.NomPrenom{
    font-weight: bold;
}
</style>