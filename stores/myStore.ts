import { defineStore } from 'pinia';

// From trying shit out, I believe you cannot have more than 1 function that changes the store
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function changeCount(val : number) {
    count.value = count.value + val
  }

  return { count, name, doubleCount, changeCount }
})