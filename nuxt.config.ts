import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
      script:[
        {
          hid: 'font-awesome-brands',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/brands.min.js',
          defer: true
        },
        {
          hid: 'font-awesome-solid',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/solid.min.js',
          defer: true
        },
        {
          hid: 'font-awesome',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/fontawesome.min.js',
          defer: true
        }
      ]
    },
    buildModules: [
        'nuxt-windicss',
    ],
    components: {
        dirs: [
          '~/projects/components',
          '~/projects/pages',
        ]
    },
})
