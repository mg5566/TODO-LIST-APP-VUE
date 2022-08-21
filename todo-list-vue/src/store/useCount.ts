import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCount = defineStore('count', () => {
  const count = ref(0);

  const getCount = computed(() => {
    return count.value;
  })

  const getFuckingCountString = computed(() => {
    console.log('in getFuckingCountString', getCount);
    // getCount 는 computedRef
    return 'Fukcing count is ' + getCount.value;
  })

  return { count, getCount, getFuckingCountString };
});
