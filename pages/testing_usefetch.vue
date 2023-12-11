<template>
  <div class="text-white bg-slate-900">
    Testing useFetch
    <div class="grid grid-cols-4 gap-4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg" v-for="(product, key) in products" :key="key">
        <img class="w-full" :src="product.image" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ product.title }}</div>
          <p class="text-gray-700 text-base">
            {{ product.description }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ product.price }}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ product.rating.rate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // The 2nd param is to transform the data received to a useable format that we can it inside template tags
  const {data : products} = await useFetch('/api/products', {
    transform: (_products) => _products.data
  });
  // IMP: This is how you log data so you can see what is inside. Else, logging products directly will give you a wrapped object(dunno its nature).
  // Logging products.value will log a proxy of the data.
  console.log(toRaw(products.value));
</script>

<style lang="scss" scoped>

</style>