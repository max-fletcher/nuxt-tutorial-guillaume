<template>
  <div>
    <Alert />
    Events Page
    <!-- Using the custom directive '$sayHello2' that comes from 'myPlugin' -->
    {{ $sayHello2('and Henlo') }}
    <br />
    <!-- Using the composable 'sayHello3' that comes from 'useUtils' -->
    {{ sayHello3('SsethZeenteach') }}
    <img src="~/assets/asset1.png" alt="From Asset" />
    <br />

    <!-- Another way to make alias(see nuxt.config.ts) -->
    <!-- <img src="@/assets/asset1.png" alt="Picture" /> -->

    <!-- This is how you access public files -->
    <img src="/public1.png" alt="From Public" />
  </div>
</template>

<script setup lang="ts">
  // binding the directive 'sayHello2' to a variable. It is imperative to use '$' since the directive is coming from the app instance "useNuxtApp()""
  const { $sayHello2 } = useNuxtApp();

  const { sayHello3 } = useUtils();
</script>