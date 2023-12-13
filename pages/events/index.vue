<template>
  <div>
    <Alert />
    Events Page
    <!-- Using the custom directive '$sayHello2' that comes from 'myPlugin' -->
    {{ $sayHello2('and Henlo') }}
    <br />
    <!-- Using the composable 'sayHello3' that comes from 'useUtils' -->
    {{ sayHello3('Sseth') }}
    <img src="~/assets/asset1.png" alt="From Asset" />
    <br />

    <!-- using nuxtContent for markdown. The name of the file must match the component where it is used. -->
    <ContentDoc />

    <div>
      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>
    </div>

    <!-- Another way to make alias(see nuxt.config.ts) -->
    <!-- <img src="@/assets/asset1.png" alt="Picture" /> -->

    <!-- This is how you access public files -->
    <img src="/public1.png" alt="From Public" />
  </div>
</template>

<script setup lang="ts">
  // Using 'useHead' so the application has better SEO. Use this for page-specific meta tags.
  useHead({
    title: 'Nuxt 3 - Events Page',
    meta: [
      { 
        name: 'description', 
        content: 'Nuxt 3 Practice - Events Page for page specific seo',
      },
      {
        name: 'keywords',
        content: 'Nuxt3,js, Nuxt3, Nuxt, Vue.js, Vue, Web development, course',
      },
      {
        name: 'og:title',
        content: '~/assets/asset1.png'
      }
    ],
    bodyAttrs: {
      class: 'test'
    },
    script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
  })

  // binding the directive 'sayHello2' to a variable. It is imperative to use '$' since the directive is coming from the app instance "useNuxtApp()""
  const { $sayHello2 } = useNuxtApp();

  const { sayHello3 } = useUtils();

  const counter = useCounter();
</script>