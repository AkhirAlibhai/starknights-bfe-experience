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
  <div class="flex flex-col items-center cursor-pointer" @click="openApp">
    <VAvatar size="64">
      <VIcon :icon="app.icon" size="40" />
    </VAvatar>
    <div class="mt-2 text-sm text-white">{{ app.name }}</div>
  </div>
</template>
