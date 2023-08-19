<script setup lang="ts">

</script>
<template>
    <section class="features">
        <div class="feature">
            <svg class="feature__icon">
                <use xlink:href="@/assets/images/sprite.svg#icon-global"></use>
            </svg>
            <h4 class="heading-4 heading-4--dark">World's Best luxury Home</h4>
            <p class="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur
                voluptatibus.
            </p>
        </div>

        <div class="feature">
            <svg class="feature__icon">
                <use xlink:href="@/assets/images/sprite.svg#icon-trophy"></use>
            </svg>
            <h4 class="heading-4 heading-4--dark">Only the best properties</h4>
            <p class="feature__text">
                Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
            </p>
        </div>

        <div class="feature">
            <svg class="feature__icon">
                <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
            </svg>
            <h4 class="heading-4 heading-4--dark">All homes in top locations</h4>
            <p class="feature__text">
                Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
            </p>
        </div>

        <div class="feature">
            <svg class="feature__icon">
                <use xlink:href="@/assets/images/sprite.svg#icon-key"></use>
            </svg>
            <h4 class="heading-4 heading-4--dark">New home in 3 weeks</h4>
            <p class="feature__text">
                Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>

        <div class="feature">
            <svg class="feature__icon">
                <use xlink:href="@/assets/images/sprite.svg#icon-presentation"></use>
            </svg>
            <h4 class="heading-4 heading-4--dark">Top 1% realtors</h4>
            <p class="feature__text">
                Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur
                voluptatibus.

            </p>
        </div>

        <div class="feature">
            <svg class="feature__icon">
                <use xlink:href="@/assets/images/sprite.svg#icon-lock"></use>
            </svg>
            <h4 class="heading-4 heading-4--dark">Secure prements with Nexter</h4>
            <p class="feature__text">
                Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
            </p>
        </div>
    </section>
</template>


<style scoped lang="scss">
// NOTE: features
.features {
    grid-column: centre-start / centre-end;

    margin: 15rem 0;
    gap: 6rem;


    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;

}

.feature {
    display: grid;
    row-gap: 1.5rem;
    -webkit-column-gap: 2.5rem;
    column-gap: 2.5rem;
    grid-template-columns: -webkit-min-content 1fr;
    grid-template-columns: min-content 1fr;

    &__icon {
        fill: $colour-primary;
        width: 4.5rem;
        height: 4.5rem;
        grid-row: 1 / span 2;
        -webkit-transform: translateY(-1rem);
        transform: translateY(-1rem);
    }

    &__text {
        font-size: 1.7rem;
    }
}
</style>