<template>
  <div class="CustomPage">
    Custom Page
  </div>
</template>

<script setup lang="ts">
  // This is using middleware 'test.ts'
  definePageMeta({
    layout: 'custom',
    middleware: 'test'
  })
</script>

<style lang="scss" scoped>

</style>