<script>
import Avatar from "./Avatar.vue"
export default {
    name: "Comment",
    components: {
        Avatar
  },
  props: {
    email: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
  }
}
</script>


<template>

<div class="d-flex pb-3">
    <Avatar />
    <div style="border-radius: 1.5rem;" class="blocComment w-75 d-flex flex-column p-2">
        <p class=" NomPrenom ps-2 mb-1">{{ email }}</p>
        <p class="mb-0 ps-2 pb-1">{{ content }}</p>
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