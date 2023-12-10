// These are states that retain their values across different pages(i.e like pinia or Vuex). We are using useCounter in 2 components(custom.vue and events/index.vue
// and when we change the value in either page and navigate to the other page, we can observe that the value doesn't change)

export const useCounter = () => useState<number>('counter', () => 0);
export const useColor = () => useState<string>('color', () => 'pink');