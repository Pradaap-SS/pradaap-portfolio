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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Software Development Engineer  portfolio focused on backend, distributed systems, and scalable cloud-native platforms.'
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'Pradaap Shiva Kumar Shobha · Software Development Engineer '
        },
        {
          property: 'og:description',
          content:
            'Backend-focused engineer with experience improving latency, reliability, and deployment safety at scale.'
        },
        { property: 'og:image', content: '/og-image.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Pradaap Shiva Kumar Shobha · Software Development Engineer '
        },
        {
          name: 'twitter:description',
          content:
            'Backend-focused engineer with experience improving latency, reliability, and deployment safety at scale.'
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