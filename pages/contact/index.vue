<template>
    <div class="contact">
        <h2 class="heading-2 heading-2--dark mb-medium">Contact</h2>
        <ul class="contact__list">
            <li>
                <span>Phone Number:</span>
                <span>&nbsp;</span>
                <span>123-456-7890</span>
            </li>
            <li>
                <span>E-mail:</span>
                <span>&nbsp;</span>
                <span>dyvinehollistic@gmail.com</span>
            </li>
            <li>Daphine Kwamboka</li>
        </ul>
        <Form />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.contact {
    padding-top: 4rem;
    min-height: 90vh;
    display: grid;
    grid-auto-rows: min-content;
    place-items: start center;

    &__list {
        font-size: 2.25rem;
    }
}
</style>