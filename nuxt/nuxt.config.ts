// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image-edge',
  ],
  css: ['@/assets/css/index.pcss'],
  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-import': true,
      'postcss-easings': {},
      'postcss-nested': {},
      'postcss-custom-media': {
        importFrom: './assets/css/custom-media.css'
      }
    },
  }
})
