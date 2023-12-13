<template>
  <div>
    <!-- Another way to define title if you don't wish to use 'useHead' hook. Notice that it is 'Title' not 'title'(capital T). Same with 'Head' and not 'head'. Keep this in mind for Nuxt3. -->
    <Head>
      <Title>Another way to define title if you don't wish to use 'useHead' hook</Title>
      <!-- for dynamic meta tag -->
      <Meta name="description" :content="meta_text" />
    </Head>
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

  // for dynamic title
  const meta_text = 'this is my dynamic meta tag';

  // it is also possible to inject a const variable to 'useHead' to get the same outcome i.e to get a dynamic meta tag. See example below:
  // useHead({
  //   meta: [
  //     {
  //       name: 'description',
  //       content: meta_text,
  //     },
  //   ],
  // })

  // you can also use 'definePageMeta' composable to define meta tags or dynamic meta tags. See example below:
  // definePageMeta({
  //   title: meta_text,
  // })

  // This is using middleware 'test.ts'
  definePageMeta({
    layout: 'custom',
    middleware: 'test'
  })

  const counter = useCounter();
</script>

<style lang="scss" scoped>

</style>