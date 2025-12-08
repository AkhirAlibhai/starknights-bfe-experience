<script setup lang="ts">
import { useRouter } from "vue-router";
import type { AppDefinition } from "@/apps/app";

const props = defineProps<{
  app: AppDefinition;
}>();

const router = useRouter();

function openApp() {
  if (props.app.action) return props.app.action();
  if (props.app.route) return router.push(props.app.route);
}
</script>

<template>
  <div @click="openApp" style="color: inherit; cursor: pointer;"
    class="d-flex flex-column align-center text-center text-decoration-none">
    <VBadge :content="app.badge" :model-value="app.badge ? app.badge > 0 : false" color="#ff0000">
      <VIcon :icon="app.icon" size="64"
        :style="{ backgroundColor: app.backgroundColor, borderRadius: '1rem', padding: '0.5rem' }" />
    </VBadge>
    <div class="mt-2 text-sm text-white">{{ app.name }}</div>
  </div>
</template>
