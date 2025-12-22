<script setup lang="ts">
import { useRouter } from "vue-router";
import type { AppDefinition } from "@/apps/app";

const props = defineProps<{
  app: AppDefinition;
}>();

const router = useRouter();
const ICON_SIZE = 64;

function openApp() {
  if (props.app.action) return props.app.action();
  if (props.app.route) return router.push(props.app.route);
}
</script>

<template>
  <div @click="openApp" style="color: inherit; cursor: pointer;"
    class="d-flex flex-column align-center text-center text-decoration-none">
    <VBadge :content="app.badge" :model-value="app.badge ? app.badge > 0 : false" color="#ff0000">
      <VImg v-if="typeof app.icon === 'string'" :src="app.icon" :width=ICON_SIZE :height=ICON_SIZE
        :style="{ backgroundColor: app.backgroundColor, borderRadius: '1rem', padding: '0.5rem' }" />
      <VIcon v-else :icon="app.icon" :size=ICON_SIZE
        :style="{ backgroundColor: app.backgroundColor, borderRadius: '1rem', padding: '0.5rem' }" />
    </VBadge>
    <div class="mt-2 text-sm text-white">{{ app.name }}</div>
  </div>
</template>
