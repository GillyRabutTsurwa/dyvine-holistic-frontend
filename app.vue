<template>
  <Navigation />
  <div class="not-a-tailwind-container">
    <header class="header">
      <h1 class="heading-1">Dyvine Holistic</h1>
      <h2>Subtitle Goes Here</h2>
      <button class="btn header__btn">Explore</button>
    </header>

    <figure class="realtors">
      <img src="https://source.unsplash.com/random/?medical" class="realtors__img" alt="random">
    </figure>

    <div class="story__pictures">
      <img src="@/assets/images/story-1.jpeg" alt="Couple" class="story__img--1">
      <img src="@/assets/images/story-2.jpeg" alt="New House" class="story__img--2">
    </div>

    <div class="story__content">
      <h3 class="heading-3 mb-small">About Dyvine</h3>
      <h2 class="heading-2 heading-2--dark mb-medium">Our Mission</h2>
      <p class="story__text mb-large">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, exercitationem non similique amet aut
        laudantium enim soluta beatae, voluptatibus debitis labore rem omnis natus, inventore doloribus vitae repudiandae
        esse quibusdam tempora fuga! Sunt quae laudantium omnis modi inventore culpa eveniet maxime doloremque, est
        exercitationem alias eius recusandae sapiente distinctio quod fuga fugit soluta nisi laborum officia rem atque
        ipsam cum quis? Fugit officiis earum magnam rerum pariatur cum iste veniam id illo animi, debitis accusamus est
        corporis, temporibus, quia repudiandae iure aliquid dolore! Tenetur vitae impedit atque corrupti mollitia eius
        quasi aut omnis repellat, officiis voluptates in amet, at autem.
      </p>
      <button class="btn">Find your own home</button>
    </div>

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

    <!-- <div class="story__pictures">
      <img src="@/assets/images/story-1.jpeg" alt="Couple" class="story__img--1">
      <img src="@/assets/images/story-2.jpeg" alt="New House" class="story__img--2">
    </div>

    <div class="story__content">
      <h3 class="heading-3 mb-small">Happy Customers</h3>
      <h2 class="heading-2 heading-2--dark mb-medium">&ldquo;The best decision of our lives&rdquo;</h2>
      <p class="story__text mb-large">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur
        voluptatibus. Quidem consequatur harum volupta!
      </p>
      <button class="btn">Find your own home</button>
    </div> -->

    <section class="homes">
      <div class="home">
        <img src="@/assets/images/house-1.jpeg" alt="House" class="home__img">
        <svg class="home__like">
          <use xlink:href="@/assets/images/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 class="home__name">Beautiful Family House</h5>
        <div class="home__location">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>USA</p>
        </div>
        <div class="home__rooms">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>5 rooms</p>
        </div>
        <div class="home__area">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-expand"></use>
          </svg>
          <p>325 m <sup>2</sup> </p>
        </div>
        <div class="home__price">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>1,200,000</p>
        </div>
        <button class="btn home__btn">Contact Realtor</button>
      </div>

      <div class="home">
        <img src="@/assets/images/house-2.jpeg" alt="House" class="home__img">
        <svg class="home__like">
          <use xlink:href="@/assets/images/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 class="home__name">Modern Glass Villa</h5>
        <div class="home__location">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>Canada</p>
        </div>
        <div class="home__rooms">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>6 rooms</p>
        </div>
        <div class="home__area">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-expand"></use>
          </svg>
          <p>450 m <sup>2</sup> </p>
        </div>
        <div class="home__price">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>2,750,000</p>
        </div>

        <button class="btn home__btn">Contact Realtor</button>
      </div>

      <div class="home">
        <img src="@/assets/images/house-3.jpeg" alt="House" class="home__img">
        <svg class="home__like">
          <use xlink:href="@/assets/images/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 class="home__name">Cozy Country House</h5>
        <div class="home__location">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>UK</p>
        </div>
        <div class="home__rooms">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>4 rooms</p>
        </div>
        <div class="home__area">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-expand"></use>
          </svg>
          <p>250 m <sup>2</sup> </p>
        </div>
        <div class="home__price">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>850,000</p>
        </div>
        <button class="btn home__btn">Contact Realtor</button>
      </div>

      <div class="home">
        <img src="@/assets/images/house-4.jpeg" alt="House" class="home__img">
        <svg class="home__like">
          <use xlink:href="@/assets/images/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 class="home__name">Large Rustical Villa</h5>
        <div class="home__location">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>Portugal</p>
        </div>
        <div class="home__rooms">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>6 rooms</p>
        </div>
        <div class="home__area">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-expand"></use>
          </svg>
          <p>480 m <sup>2</sup> </p>
        </div>
        <div class="home__price">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>1,950,000</p>
        </div>
        <button class="btn home__btn">Contact Realtor</button>
      </div>

      <div class="home">
        <img src="@/assets/images/house-5.jpeg" alt="House" class="home__img">
        <svg class="home__like">
          <use xlink:href="@/assets/images/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 class="home__name">Majestic Palace House</h5>
        <div class="home__location">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>Germany</p>
        </div>
        <div class="home__rooms">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>18 rooms</p>
        </div>
        <div class="home__area">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-expand"></use>
          </svg>
          <p>4230 m <sup>2</sup> </p>
        </div>
        <div class="home__price">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>9,500,000</p>
        </div>

        <button class="btn home__btn">Contact Realtor</button>
      </div>

      <div class="home">
        <img src="@/assets/images/house-6.jpeg" alt="House" class="home__img">
        <svg class="home__like">
          <use xlink:href="@/assets/images/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 class="home__name">Modern Family Apartment</h5>
        <div class="home__location">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>Italy</p>
        </div>
        <div class="home__rooms">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>3 rooms</p>
        </div>
        <div class="home__area">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-expand"></use>
          </svg>
          <p>180 m <sup>2</sup> </p>
        </div>
        <div class="home__price">
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>600,000</p>
        </div>

        <button class="btn home__btn">Contact Realtor</button>
      </div>


    </section>

    <section class="gallery">
      <figure class="gallery__item gallery__item--1">
        <img src="@/assets/images/gal-1.jpeg" alt="Gallery Image 1" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--2">
        <img src="@/assets/images/gal-2.jpeg" alt="Gallery Image 2" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--3">
        <img src="@/assets/images/gal-3.jpeg" alt="Gallery Image 3" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--4">
        <img src="@/assets/images/gal-4.jpeg" alt="Gallery Image 4" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--5">
        <img src="@/assets/images/gal-5.jpeg" alt="Gallery Image 5" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--6">
        <img src="@/assets/images/gal-6.jpeg" alt="Gallery Image 6" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--7">
        <img src="@/assets/images/gal-7.jpeg" alt="Gallery Image 7" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--8">
        <img src="@/assets/images/gal-8.jpeg" alt="Gallery Image 8" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--9">
        <img src="@/assets/images/gal-9.jpeg" alt="Gallery Image 9" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--10">
        <img src="@/assets/images/gal-10.jpeg" alt="Gallery Image 10" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--11">
        <img src="@/assets/images/gal-11.jpeg" alt="Gallery Image 11" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--12">
        <img src="@/assets/images/gal-12.jpeg" alt="Gallery Image 12" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--13">
        <img src="@/assets/images/gal-13.jpeg" alt="Gallery Image 13" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--14">
        <img src="@/assets/images/gal-14.jpeg" alt="Gallery Image 14" class="gallery__img">
      </figure>
    </section>

    <footer class="footer">
      <ul class="nav">
        <li class="nav__item"><a href="#" class="nav__link">Find your dream home</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Request Proposal</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Download home planner</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Contact us</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Submit your property</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Come work with us</a></li>
      </ul>
      <div class="copyright">
        &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes. This does
        <span>not</span> apply if you plan to produce your own course or tutorials based on this project.
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
// NOTE: HEADER STYLES
.header {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba($colour-secondary, 0.93)), to(rgba($colour-secondary, 0.93))), url(@/assets/@/assets/images/hero.jpeg);
  background-image: linear-gradient(rgba($colour-secondary, 0.93), rgba($colour-secondary, 0.93)), url(@/assets/@/assets/images/hero.jpeg);
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

//NOTE: story
.story {
  &__pictures {
    background-color: $colour-primary;
    grid-column: full-start / col-end 4;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba($colour-primary, 0.5)), to(rgba($colour-primary, 0.5))), url(@/assets/@/assets/images/back.jpg);
    background-image: linear-gradient(rgba($colour-primary, 0.5), rgba($colour-primary, 0.5)), url(@/assets/@/assets/images/back.jpg);

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
    grid-row: 2 / 6;
    -webkit-box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
  }

  &__img--2 {
    grid-column: 4 / 7;
    grid-row: 4 / 6;
    width: 115%;
    z-index: 100;
    -webkit-box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);

  }

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

//NOTE: home
.homes {
  grid-column: centre-start / centre-end;
  margin: 15rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 7rem;
}

.home {
  background-color: $colour-grey-light-1;
  display: grid;
  row-gap: 3.5rem;
  grid-template-columns: repeat(2, 1fr);

  &__img {
    width: 100%; //NEEDED
    grid-row: 1 / 2;
    grid-column: 1 / -1;

  }

  &__like {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    fill: $colour-primary;
    width: 2.5rem;
    height: 2.5rem;
    z-index: 1000;
    justify-self: end; // Aligned the item on the grid cell horizontally
    margin: 1rem;
  }

  &__name {

    width: 80%;
    justify-self: center; // aligns the item horizontally (row axis)
    align-self: end; // aligns the item vertically (column axis)
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    z-index: 1000;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);

    font-family: $primaryFontStack;
    font-size: 1.6rem;
    text-align: center;
    padding: 1.25rem;
    background-color: $colour-secondary;
    color: #FFF;
    font-weight: 400;

  }

  &__location,
  &__rooms {
    margin-top: 2.5rem;
  }

  &__location,
  &__rooms,
  &__area,
  &__price {
    font-size: 1.5rem;
    margin-left: 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;



    svg {
      fill: $colour-primary;
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }

  &__btn {
    grid-column: 1 / -1;
  }
}

// NOTE: gallery
.gallery {
  background-color: $colour-grey-light-1;
  grid-column: full-start / full-end;
  padding: 1.5rem;

  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw); // used vw for responsiveness

  &__item {
    &--1 {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
    }

    &--2 {
      grid-column: 3 / 6;
      grid-row: 1 / 4;
    }

    &--3 {
      grid-column: 6 / 7;
      grid-row: 1 / 3;
    }

    &--4 {
      grid-column: 7 / -1;
      grid-row: 1 / 3;
    }

    &--5 {
      grid-column: 1 / 3;
      grid-row: 3 / 6;
    }

    &--6 {
      grid-column: 3 / 5;
      grid-row: 4 / 6;
    }

    &--7 {
      grid-column: 5 / 6;
      grid-row: 4 / 5;
    }

    &--8 {
      grid-column: 6 / 8;
      grid-row: 3 / 5;
    }

    &--9 {
      grid-column: 8 / -1;
      grid-row: 3 / 6;
    }

    &--10 {
      grid-column: 1 / 2;
      grid-row: 6 / -1;
    }

    &--11 {
      grid-column: 2 / 4;
      grid-row: 6 / -1;
    }

    &--12 {
      grid-column: 4 / 5;
      grid-row: 6 / -1;
    }

    &--13 {
      grid-column: 5 / 8;
      grid-row: 5 / -1;
    }

    &--14 {
      grid-column: 8 / -1;
      grid-row: 6 / -1;
    }
  }


  &__img {
    width: 100%; //NEEDED
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    display: block;
  }
}

// NOTE: footer
.footer {
  background-color: $colour-secondary;
  grid-column: full-start / full-end;
  padding: 8rem;



}

.nav {
  list-style: none;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  &__link {

    &:link,
    &:visited {
      display: block;
      padding: 1.5rem;
      font-size: 1.4rem;
      color: #FFF;
      text-decoration: none;
      font-family: $primaryFontStack;
      text-transform: uppercase;
      text-align: center;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;

    }

    &:hover,
    &:active {
      background-color: rgba(255, 255, 255, 0.05);
      -webkit-transform: translateY(-0.5rem);
      transform: translateY(-0.5rem);
    }
  }
}

.copyright {
  font-size: 1.4rem;
  color: $colour-grey-light-2;
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 70%;

  & span {
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>