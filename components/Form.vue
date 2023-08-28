<script setup lang="ts">
const route = useRoute();

const basicFormStyle = computed(() => {
    return {
        'index-styles': route.name === "index",
        'contact-styles': route.name === "contact"
    }
})
</script>

<template>
    <div :class="basicFormStyle" class="form-container">
        <h4 class="form-title">Contact Form</h4>
        <p class="form-text">Use this form to reach out to us, and we'll get back to you as soon as we can.
        </p>
        <form action="" class="form">
            <input type="text" name="" placeholder="Name">
            <input type="email" name="" id="" placeholder="E-mail">
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <!-- <Button text="Subscribe" colourPrimary="#104f55" colourSecondary="#f0f0f0" /> -->
            <button class="btn header__btn">Submit</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
.form-container {
    margin: 4rem auto;

    .form-title {
        text-align: center;
        font-size: 3rem;
    }

    .form-text {
        padding: 1rem 3rem;
        font-size: 2rem;
        text-align: center;
    }
}

.form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
        font-family: inherit;
        font-size: 1.9rem;
        color: #13113a;
        padding: 1.5rem;
        margin-bottom: 2rem;

        &:focus {
            outline: none;
            border-color: #13113a;
        }
    }


    input {
        height: 5rem;
    }


    button {
        align-self: center;
        font-size: 1.6rem;
    }
}

.index-styles {
    grid-column: centre-start / centre-end;
    width: 80%;
}

.contact-styles {
    width: 60%;
}
</style>