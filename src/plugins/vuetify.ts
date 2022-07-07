// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    theme: {
      themes: {
        light: {
          lightGreen: '#009688',
          Grey: '#E9E9E9',
          lightGrey: '#E2E5ED',
          DarkGrey: '#A8A8A8',
          background: '#F2F3F7'
        },
      },
    },
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
