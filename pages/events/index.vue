<template>
  <div>
    <Alert />
    Events Page
    <img src="~/assets/asset1.png" alt="From Asset" />

    <br />

    <!-- Another way to make alias(see nuxt.config.ts) -->
    <!-- <img src="@/assets/asset1.png" alt="Picture" /> -->

    <!-- This is how you access public files -->
    <img src="/public1.png" alt="From Public" />
  </div>
</template>