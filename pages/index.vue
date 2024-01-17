<script setup lang="ts">
const pinia = useExampleStore();
const { example } = storeToRefs(pinia);
const { $toast } = useNuxtApp();

onMounted(() => {
  $toast.success('Página carregada com sucesso.');
});
</script>

<template>
  <div>
    <h1 class="text-center text-4xl">
      {{ $t('title') }}
    </h1>

    <div class="grid grid-cols-2 items-center justify-center lg:grid-cols-2">
      <UCard v-for="data in example" :key="data.id" class="mx-4 my-4">
        <h2 class="mb-4">
          {{ data.description }}
        </h2>
      </UCard>
    </div>
  </div>
</template>
