export default defineNuxtConfig({
    modules: ["@nuxtjs/google-fonts"],
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
    googleFonts: {
        display: "swap",
        preconnect: true,
        families: {
            Abel: true,
            "League+Spartan": {
                wght: [200, 300, 400, 600, 700],
            },
            "Lexend+Deca": {
                wght: [100, 300, 400, 500],
            },
            "Kulim+Park": true,
        },
    },
});
