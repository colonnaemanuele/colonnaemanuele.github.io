import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/lib/styles/main.sass'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#2e7d32',
            secondary: '#388e3c',
            accent: '#4caf50',
            error: '#f44336',
            warning: '#ff9800',
            info: '#2196f3',
            success: '#66bb6a',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})