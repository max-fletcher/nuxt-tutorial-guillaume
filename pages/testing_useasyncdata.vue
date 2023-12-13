<template>
  <div class="text-white bg-slate-900">
    Testing useAsyncData

    <h1>Using useAsyncData</h1>
    <div>
      <p>{{ pending ? "Loading" : productsCount }}</p>
      <button @click="refresh">Refresh</button>
    </div>

    <div>
      Counter: {{ count }}
      <button @click="sumNum(1)">
        +
      </button>
      <button @click="sumNum(-1)">
        -
      </button>
    </div>

    <div>
      <h1>var1 - {{ var1 }}</h1>
      <button @click="changeRef(1)">changeByRef</button>
      <h1>var2 - {{ var2.count }}</h1>
      <button @click="changeReactive(1)">changeByReactive</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Apparantly, useAsyncData actually can be refreshed using refreshNuxtData
  const {data : productsCount, pending} = await useAsyncData('products_refresh', () => $fetch('/api/products_async'),
                                          {
                                            transform: (_productsCount) => _productsCount
                                          });

  const count = ref(toRaw(productsCount.value.productCount))

  // TESTING DATA MUTATION
  // So far, using ref is the better option seems as it allows destructuring and reassignment, primitive values and all data aggregates(object, array, maps etc.). However, reactive may be better for nested objects(check).

  const var1 = ref({count: 10});
  const var2 = reactive({count: 10});

  function changeRef(){
    // var1.value = {count : 100}
    var1.value = {count : var1.value.count+1}
  }

  function changeReactive(){
    var2.count += 1
  }

  console.log(toRaw(var1.value), var2);

  console.log(toRaw(productsCount.value), productsCount.value.productCount, toRaw(count.value));

  // END TESTING DATA MUTATION

  // binding 'refreshNuxtData' to a variable called 'refresh'. You are free to use another name. When the button is pressed, the 'refresh' function is triggered that re-fetches the data. That is what 'useAsyncData' does.
  // The param passed to 'refreshNuxtData' is the 1st param of 'useAsyncData' which identifies which 'useAsyncData' to refresh/re-fetch if the button is pressed, in case there are multiple 'useAsyncData' and multiple buttons.
  // refreshNuxtData is auto-imported so chill.
  const refresh = () => refreshNuxtData('products_refresh');

  function sumNum(val) {
    count.value += val
  }
</script>

<style lang="scss" scoped>

</style>