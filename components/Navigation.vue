<script setup lang="ts"></script>

<template>
  <nav class="navigation">
    <NuxtLink to="/">
      <img src="@/assets/images/svg/logo.svg" alt="Nexter logo" class="header__logo">
    </NuxtLink>
    <ul class="navigation__list">
      <li class="navigation__list--item">
        <NuxtLink to="https://www.facebook.com/profile.php?id=100090280427401" target="_blank">Facebook</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/contact">Contact Us</NuxtLink>
      </li>
    </ul>
    <ul class="navigation__list">
      <li class="navigation__list--item">
        <span style="color: #fefefe;">Sign Out</span>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  @extend %flex-basic;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #f0f0f0;
  padding: 0 1.75rem;
  background-color: $colour-secondary;

  @include breakpoint(480) {
    height: 17.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &>*:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  .logo {
    font-size: 2.5rem;
    font-weight: 500;
    color: $text-grey-light;
    // font-family: $Josefin;
    letter-spacing: 1.5px;
  }

  &__list,
  &__icons {
    list-style: none;
    @extend %flex-basic;
  }

  &__list {
    font-family: "Abel", cursive;
    font-size: 1.6rem;

    &--item {
      margin-right: 3.25rem;

      a {

        &,
        &:link,
        &:visited {
          font-size: 1.75rem;
          text-decoration: none;
          color: $whitish;
        }

        &:hover,
        &:active {
          font-weight: bold;
        }
      }

      .username {
        font-size: 1.8rem;
        color: #fefefe;
      }
    }
  }

  &__icons {
    font-size: 1.6rem;

    &--icon {
      margin-right: 2rem;

      a {

        &:link,
        &:visited {
          text-decoration: none;
          color: $whitish;
        }
      }
    }
  }
}
</style>
