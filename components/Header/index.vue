<template>
  <div>
    <header>
        <ul class="flex">
          <li>
            <NuxtLink class="" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="ps-4" to="/events">Events</NuxtLink>
          </li>
          <li>
            <NuxtLink class="ps-4" to="/custom">Custom</NuxtLink>
          </li>
          <li>
            <NuxtLink class="ps-4" to="/testing_usefetch">Testing useFetch</NuxtLink>
          </li>
          <li>
            <NuxtLink class="ps-4" to="/testing_uselazyfetch">Testing useLazyFetch</NuxtLink>
          </li>
          <li>
            <NuxtLink class="ps-4" to="/testing_useasyncdata">Testing useAsyncData</NuxtLink>
          </li>
        </ul>
      </header>
    <HeaderAvatar />
    <!-- 
      Taken from - https://icones.js.org
      This is how you import an svg from components folder(components/Icons/Bell.vue).
      Its better to store an SVG as its own component and import it like this instead of installing a package to handle SVGs.
    -->
    <IconsBell />
  </div>
</template>

<script setup>
  // Bind "sayHello" to a variable using destructuring
  const { sayHello } = useUtils();
  sayHello();
</script>

<style lang="scss" scoped>

</style>