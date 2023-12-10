<template>
  <div>
    <div>
      Index Page
    </div>
    <div>
      Counter: {{ counter.count }}
      <button @click="counter.changeCount(1)">
        +
      </button>
      <button @click="counter.changeCount(-1)">
        -
      </button>
    </div>
    <div>
      {{ response.data }}
    </div>
  </div>
</template>

<script setup>
  // importing the counter store.
  import { useCounterStore } from '~/stores/myStore'
  const counter = useCounterStore()
  // console.log(counter);

  // Making a call to '/api/hello' which is located inside 'server/api/hello.get.ts'
  const response = await $fetch('/api/hello')
  // console.log(response);
</script>

<style lang="scss" scoped>

</style>