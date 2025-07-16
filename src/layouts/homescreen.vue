<script setup lang="ts">
// Icons

import BatteryIcon from "~icons/material-symbols/battery-6-bar";
import CellIcon from "~icons/material-symbols/signal-cellular-4-bar";
import WiFiIcon from "~icons/material-symbols/signal-wifi-4-bar";
</script>

<template>
  <VApp>
    <RouterView #="{ Component }">
      <VSystemBar window height="40" style="background-color: transparent;">
        <span class="text-h5">PhaseTel</span>
        <VSpacer></VSpacer>
        <VIcon :icon="WiFiIcon" size="2rem"></VIcon>
        <VIcon :icon="CellIcon" size="2rem" class="ms-2"></VIcon>
        <VIcon :icon="BatteryIcon" size="2rem" class="ms-2"></VIcon>
      </VSystemBar>

      <component :is="Component"></component>
    </RouterView>
  </VApp>
</template>
