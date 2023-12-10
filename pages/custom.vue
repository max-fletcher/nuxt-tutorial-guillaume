<template>
  <div>
    <div class="CustomPage">
      Custom Page
    </div>
    <div>
      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  // This is using middleware 'test.ts'
  definePageMeta({
    layout: 'custom',
    middleware: 'test'
  })

  const counter = useCounter();
</script>

<style lang="scss" scoped>

</style>