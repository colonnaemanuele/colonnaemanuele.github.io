export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],
  
  vuetify: {
    moduleOptions: {
      /* vuetify options */
      styles: 'sass',
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              primary: '#084b0c',
              secondary: '#028108',
              accent: '#4caf50',
              error: '#f44336',
              warning: '#ff9800',
              info: '#2196f3',
              success: '#66bb6a',
            },
          },
        },
      },
    }
  },

  ssr: true,
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})