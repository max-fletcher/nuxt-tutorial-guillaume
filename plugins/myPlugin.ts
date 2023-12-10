// the plugins folder contains logic that will be bound to the nuxtApp instance when your vue/nuxt app is created.
// It may contain instantiation of plugins(https://nuxt.com/docs/guide/directory-structure/plugins#vue-plugins) or 
// a custom directive if you don't wish to use composables(https://nuxt.com/docs/guide/directory-structure/plugins#typing-plugins)
// or provide a custom directive to all components(https://nuxt.com/docs/guide/directory-structure/plugins#vue-directives)
export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
        sayHello2: (msg: string) => `Hello ${msg}!`
    }
  }
})