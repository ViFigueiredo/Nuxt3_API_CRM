import type { ExampleInterface } from '@/interfaces/example';

export const useExampleStore = defineStore(
  'example',

  () => {
    const example = ref<ExampleInterface[]>([]);

    const addExample = (data: ExampleInterface) => {
      const dataFilter = example.value.some((v) => v.id === data.id);
      if (!dataFilter) example.value.push(data);
    };

    return { example, addExample };
  },
  {
    persist: {
      // storage: persistedState.sessionStorage
      // storage: persistedState.cookies
      storage: persistedState.localStorage,
    },
  },
);
