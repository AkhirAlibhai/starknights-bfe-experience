<script setup lang="ts">
import internetImg from "@/assets/internet.png";
import lowBatteryImg from "@/assets/low-battery.png";
import signalStatusImg from "@/assets/signal-status.png";
</script>

<template>
  <div class="status-bar h-16 px-4 py-6 flex justify-between items-center">
    <span class="font-mono text-3xl">PhaseTel</span>

    <div class="flex items-center space-x-4 h-full">
      <img :src="signalStatusImg" alt="Signal status" class="status-icon invert" />

      <img :src="internetImg" alt="Internet connection" class="status-icon invert" />

      <img :src="lowBatteryImg" alt="Low battery" class="status-icon invert" />
    </div>
  </div>
</template>

<style scoped>
.status-icon {
  height: 2rem;
  width: auto;
}
</style>
