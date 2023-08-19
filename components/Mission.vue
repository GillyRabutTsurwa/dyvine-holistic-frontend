<script setup lang="ts">

</script>
<template>
    <div class="story__pictures">
        <img src="@/assets/images/story-1.jpeg" alt="Couple" class="story__img--1">
        <!-- <img src="@/assets/images/story-2.jpeg" alt="New House" class="story__img--2"> -->
    </div>

    <div class="story__content">
        <h3 class="heading-3 mb-small">About Dyvine</h3>
        <h2 class="heading-2 heading-2--dark mb-medium">Our Mission</h2>
        <p class="story__text mb-large">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, exercitationem non similique amet aut
            laudantium enim soluta beatae, voluptatibus debitis labore rem omnis natus, inventore doloribus vitae
            repudiandae
            esse quibusdam tempora fuga! Sunt quae laudantium omnis modi inventore culpa eveniet maxime doloremque, est
            exercitationem alias eius recusandae sapiente distinctio quod fuga fugit soluta nisi laborum officia rem atque
            ipsam cum quis? Fugit officiis earum magnam rerum pariatur cum iste veniam id illo animi, debitis accusamus est
            corporis, temporibus, quia repudiandae iure aliquid dolore! Tenetur vitae impedit atque corrupti mollitia eius
            quasi aut omnis repellat, officiis voluptates in amet, at autem.
        </p>
        <button class="btn">Find your own home</button>
    </div>
</template>


<style lang="scss">
// NOTE: realtor styles
.realtors {
    background-color: $colour-secondary;
    grid-column: col-start 7 / full-end;
    height: 100%;


    &__img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }
}
</style>