export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/styles/tailwind.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  typescript: {
    strict: true
  },

  app: {
    head: {
      title: 'Pradaap Shiva Kumar Shobha',
      titleTemplate: '%s · Pradaap Shiva Kumar Shobha',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Pradaap Shiva Kumar Shobha - Full Stack Builder focused on backend, AI-enabled automation, and scalable cloud-native platforms.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Pradaap Shiva Kumar Shobha' },
        {
          property: 'og:title',
          content: 'Pradaap Shiva Kumar Shobha · Full Stack Builder'
        },
        {
          property: 'og:description',
          content:
            'Full Stack Builder focused on backend, AI-enabled automation, and scalable cloud-native platforms.'
        },
        { property: 'og:image', content: '/og-image.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@your_twitter_handle' },
        {
          name: 'twitter:title',
          content: 'Pradaap Shiva Kumar Shobha · Full Stack Builder'
        },
        {
          name: 'twitter:description',
          content:
            'Full Stack Builder focused on backend, AI-enabled automation, and scalable cloud-native platforms.'
        },
        { name: 'twitter:image', content: '/og-image.svg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' }
      ]
    }
  },

  compatibilityDate: '2026-03-15'
})
