// https://nuxt.com/docs/api/configuration/nuxt-config
const hiddenRoutes = ["/noi"];

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    hiddenPageKey:
      process.env.NUXT_HIDDEN_PAGE_KEY ??
      process.env.HIDDEN_PAGE_KEY ??
      "",
  },
  appConfig: {
    hiddenRoutes,
    hiddenQueryParam: "k",
  },
  app: {
    head: {
      title: "Emanuele Colonna",
      meta: [{ name: "description", content: "Personal Web Site" }],
    },
  },

  build: {
    transpile: ["vuetify"]
  },

  imports: {
    autoImport: true,
    dirs: ["*"],
  },

  routeRules: Object.fromEntries(
    hiddenRoutes.map((route) => [
      route,
      {
        headers: {
          "X-Robots-Tag": "noindex, nofollow, noarchive",
        },
      },
    ])
  ),

  modules: ["vuetify-nuxt-module"],
});