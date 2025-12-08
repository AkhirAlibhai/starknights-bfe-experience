<route lang="json">{
  "meta": {
    "layout": "unlocked",
    "blur": false
  }
}</route>;

<script setup lang="ts">
import { apps } from "@/apps/registry";
import AppIcon from "@/components/AppIcon.vue";
</script>

<template>
  <div class="grid grid-cols-3 gap-6 p-6 text-white h-full">
    <AppIcon v-for="a in apps" :key="a.id" :app="a" />
  </div>
</template>
