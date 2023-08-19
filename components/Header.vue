<script lang="ts" setup></script>

<template>
  <header class="header">
    <h1 class="heading-1">Dyvine Holistic</h1>
    <h2>Subtitle Goes Here</h2>
    <button class="btn header__btn">Explore</button>
  </header>

  <figure class="realtors">
    <img src="https://source.unsplash.com/random/?medical" class="realtors__img" alt="random">
  </figure>
</template>

<style scoped lang="scss">
// NOTE: HEADER STYLES
.header {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba($colour-secondary, 0.93)), to(rgba($colour-secondary, 0.93))), url(@/assets/images/hero.jpeg);
  background-image: linear-gradient(rgba($colour-secondary, 0.93), rgba($colour-secondary, 0.93)), url(@/assets/images/hero.jpeg);
  background-size: cover;
  background-position: center;
  grid-column: full-start / col-end 6;
  padding: 4rem 8rem 8rem 8rem;

  display: grid;
  place-items: center;
  align-content: center;
  row-gap: 1.5rem;
  grid-template-rows: repeat(3, min-content);

  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 3rem;
  }



  &__logo {
    // height: 25rem;
    justify-self: center;
  }
}
</style>
