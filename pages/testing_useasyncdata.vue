<template>
  <div class="text-white bg-slate-900">
    Testing useAsyncData

    <h1>Using useAsyncData</h1>
    <div>
      <p>{{ pending ? "Loading" : productsCount }}</p>
      <button @click="refresh">Refresh</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Apparantly, useAsyncData actually can be refreshed using refreshNuxtData
  const {data : productsCount, pending} = await useAsyncData('products_refresh', () => $fetch('/api/products_async'));

  console.log(toRaw(productsCount));

  // binding 'refreshNuxtData' to a variable called 'refresh'. You are free to use another name. When the button is pressed, the 'refresh' function is triggered that re-fetches the data. That is what 'useAsyncData' does.
  // The param passed to 'refreshNuxtData' is the 1st param of 'useAsyncData' which identifies which 'useAsyncData' to refresh/re-fetch if the button is pressed, in case there are multiple 'useAsyncData' and multiple buttons.
  // refreshNuxtData is auto-imported so chill.
  const refresh = () => refreshNuxtData('products_refresh')
</script>

<style lang="scss" scoped>

</style>