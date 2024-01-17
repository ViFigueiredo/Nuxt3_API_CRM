<template>
  <div>
    <NavBar />

    <UContainer class="my-4 min-h-screen">
      <slot />
    </UContainer>

    <UDivider
      class="mb-4"
      label="Fig Codes"
      :ui="{ label: 'text-primary-500 dark:text-primary-400' }"
    />
  </div>
</template>
