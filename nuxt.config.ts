export default defineNuxtConfig({
    // modules: ["@nuxtjs/tailwindcss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @use "@/assets/sass/abstracts/_extends.scss" as *; 
                    @use "@/assets/sass/abstracts/_functions.scss" as *;
                    @use "@/assets/sass/abstracts/_mixins.scss" as *;
                    @use "@/assets/sass/abstracts/_variables.scss" as *;
                    @use "@/assets/sass/base/_animations.scss" as *;
                    @use "@/assets/sass/base/_base.scss" as *;
                    @use "@/assets/sass/base/_reset.scss" as *;
                    @use "@/assets/sass/base/_typography.scss" as *;
                    `,
                },
            },
        },
    },
    css: ["@/assets/sass/main.scss"],
});
