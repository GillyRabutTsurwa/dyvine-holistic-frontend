<script setup lang="ts"></script>
<template>
    <div class="box">
        <div class="box__content">
            <h3 class="heading-3 mb-small">About Dyvine</h3>
            <h2 class="heading-2 heading-2--dark mb-medium">Our Mission</h2>
            <p class="box__text mb-large">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, exercitationem non similique amet aut
                laudantium enim soluta beatae, voluptatibus debitis labore rem omnis natus, inventore doloribus vitae
                repudiandae
                esse quibusdam tempora fuga! Sunt quae laudantium omnis modi inventore culpa eveniet maxime doloremque, est
                exercitationem alias eius recusandae sapiente distinctio quod fuga fugit soluta nisi laborum officia rem
                atque
                ipsam cum quis? Fugit officiis earum magnam rerum pariatur cum iste veniam id illo animi, debitis accusamus
                est
                corporis, temporibus, quia repudiandae iure aliquid dolore! Tenetur vitae impedit atque corrupti mollitia
                eius
                quasi aut omnis repellat, officiis voluptates in amet, at autem.
            </p>
            <button class="btn">Find your own home</button>
        </div>
    </div>
</template>


<style lang="scss">
// NOTE: realtor styles
.box {
    height: 100%;
    grid-column: full-start / full-end; //NOTE: these styles must NOT be scoped for this line to work
    display: grid;

    &__content {
        grid-column: 1 / -1;
        background-color: $colour-grey-light-1;
        grid-column: col-start 5 / full-end;

        padding: 6rem 8vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;

        h3,
        h2 {
            margin: 0 auto;
        }

        h2 {
            margin-bottom: 3rem;
        }

        .btn {
            margin: 0 auto;
        }
    }

    // NOTE: child of box__content. will nest later
    &__text {
        font-size: 3.5rem;
        // font-style: italic;
        margin-bottom: 4rem;
        text-align: justify;
    }

}

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