<template>
  <Navigation />
  <div class="not-a-tailwind-container">
    <Header />
    <Mission />
    <Features />
    <Services />
    <Form />
    <Footer />







  </div>
</template>

<style lang="scss">
//NOTE: story
.story {
  &__pictures {
    background-color: $colour-primary;
    grid-column: full-start / col-end 4;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba($colour-primary, 0.5)), to(rgba($colour-primary, 0.5))), url(https://source.unsplash.com/random/?hospital);
    background-image: linear-gradient(rgba($colour-primary, 0.5), rgba($colour-primary, 0.5)), url(https://source.unsplash.com/random/?hospital);

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  &__img--1 {
    width: 100%;
    grid-column: 2 / 6;
    grid-row: 1 / 6;
    -webkit-box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
  }

  // &__img--2 {
  //   grid-column: 4 / 7;
  //   grid-row: 4 / 6;
  //   width: 115%;
  //   z-index: 100;
  //   -webkit-box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);
  //   box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);

  // }

  &__content {
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
  }

  &__text {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 4rem;
  }
}


// NOTE: footer
</style>