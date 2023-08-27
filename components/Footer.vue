<script setup></script>
<template>
    <footer class="footer">
        <ul class="nav">
            <li class="nav__item">
                <NuxtLink to="#" class="nav__link">Schedule An Appointment</NuxtLink>
            </li>
            <li class="nav__item">
                <NuxtLink to="/contact" class="nav__link">Contact us</NuxtLink>
            </li>
            <li class="nav__item">
                <NuxtLink to="https://www.facebook.com/profile.php?id=100090280427401" target="_blank" class="nav__link">
                    Facebook (Follow Us)
                </NuxtLink>
            </li>
            <li class="nav__item">
                <NuxtLink to="#" class="nav__link">Come work with us</NuxtLink>
            </li>
        </ul>
        <div class="copyright">
            &copy; Copyright 2023 by <span>
                <NuxtLink to="https://gilbertrabuttsurwa.com" target="_blank">Gilbert Rabut Tsurwa</NuxtLink>
            </span>. All rights reserved.
        </div>
    </footer>
</template>


<style scoped lang="scss">
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

        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>