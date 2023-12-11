<template>
  <div class="text-white bg-slate-900">
    Testing useLazyFetch

    <h1>Using useLazyFetch</h1>
    <div v-if="pending">{{ pending ? "Loading" : products2 }}</div>
    <div v-else class="grid grid-cols-4 gap-4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg" v-for="(product2, key2) in products2" :key="key2">
        <img class="w-full" :src="product2.image" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ product2.title }}</div>
          <p class="text-gray-700 text-base">
            {{ product2.description }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ product2.price }}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ product2.rating.rate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // The 2nd param called 'pending' is to display a loader when the data is loading. We are using the 'useLazyFetch' method, which doesn't fetch or render/hydrate on server when SSR mode is false.
  // Hence, we will show a loader while 'useLazyFetch' is attempting to load data from an API call.
  // Notice we don't have 'data' in transform (i.e transform: (_products2) => _products2 instead of transform: (_products2) => _products2.data) because we are returning json in useFetch example but here we
  // are returning a resolve so the data is not wrapped by a data. Hit the route 'http://localhost:3000/api/products2' and 'http://localhost:3000/api/products' using a browser to see the difference.
  const {data : products2, pending} = await useLazyFetch('/api/products2', {
    transform: (_products2) => _products2
  });

  console.log(toRaw(products2));
</script>

<style lang="scss" scoped>

</style>