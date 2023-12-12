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
  // ***IMPORTANT: The difference between '$fetch', 'useFetch' and 'useAsyncData' is that '$fetch' is the barebones fetch uses ofetch(see docs). The problem is that using '$fetch' to GET data causes double data fetching,
  // once on the server-side and once on the client-side because '$fetch' does not transfer state from the server-side to the client-side so its not recommended to be used with 'ssr : true' to fetch(GET) data for hydrating the
  // page. Instead, its better to use 'useAsyncData' for fetching(GET) data. '$fetch' should be used only if you want to POST or PUT/PATCH data(i.e '$fetch' inside a fucntion that will be triggered on form submit etc.).
  // 'useAsyncData' will make a request to the server and transfer that state/data to the client without making a request on the client-side on 'ssr : true', which saves an extra API call.
  // It looks like this  ->  const { data, pending, error, refresh } = await 'useAsyncData'('mountains', () => '$fetch'('https://api.nuxtjs.dev/mountains'))
  // It is worth mentioning that the the 1st param of 'useAsyncData' is a key that is used to de-duplicate and trigger refresh/refetch this API call if need be, but as 2nd param, you can use '$fetch' or anything
  // else such as axios to make the API call. There are optional 3rd(route params as object), 4th(watcher variables as array) and other params, but those are optional. 
  // Also, you don't need to define async anywhere when using 'useAsyncData' because it is an async composable. Only use an await before the composable(i.e await 'useAsyncData'('...', () => '$fetch'('...'))).
  // Finally, 'useAsyncData' is just the same as using 'useFetch' with '$fetch'. Its a shorthand and nothing more.

  // The 2nd param is to transform the data received to a useable format that we can use inside template tags
  const {data : products} = await useFetch('/api/products', {
    transform: (_products) => _products.data
  });
  // IMP: This is how you log data so you can see what is inside. Else, logging products directly will give you a wrapped object(dunno its nature).
  // Logging products.value will log a proxy of the data.
  console.log(toRaw(products.value));
</script>

<style lang="scss" scoped>

</style>