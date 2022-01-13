import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
      script:[
        {
          hid: 'font-awesome-brands',
          src: 'node_modules/@fortawesome/fontawesome-free/js/brands.js',
          defer: true
        },
        {
          hid: 'font-awesome-solid',
          src: 'node_modules/@fortawesome/fontawesome-free/js/solid.js',
          defer: true
        },
        {
          hid: 'font-awesome-all',
          src: 'node_modules/@fortawesome/fontawesome-free/js/fontawesome.js',
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
