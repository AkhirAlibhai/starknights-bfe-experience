<template>
  <VApp>
    <RouterView #="{ Component }">
      <VAppBar :title="$route.meta.title as string ?? 'Starknight App'">
        <template #prepend>
          <VBtn icon="$close" to="/"></VBtn>
        </template>
      </VAppBar>

      <component :is="Component"></component>
    </RouterView>
  </VApp>
</template>
