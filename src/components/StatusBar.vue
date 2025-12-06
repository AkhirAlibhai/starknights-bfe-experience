<script setup lang="ts">
  // Icons
  import internetImg from "@/assets/internet.png";
  import lowBatteryImg from "@/assets/low-battery.png";
  import signalStatusImg from "@/assets/signal-status.png";
</script>

<template>
  <!-- Styled status bar -->
  <div class="justify-between status-bar px-4 py-6 h-16 flex items-center">
    <span class="flex items-center text-3xl font-mono">PhaseTel</span>
    <div class="flex space-x-4 items-center h-full">
      <span class="flex items-center h-full">
        <img :src="signalStatusImg" alt="Signal status icon" class="invert" style="height:2rem;width:auto;" />
      </span>
      <span class="flex items-center h-full">
        <img :src="internetImg" alt="Internet connection icon" class="invert" style="height:2rem;width:auto;" />
      </span>
      <span class="flex items-center h-full">
        <img :src="lowBatteryImg" alt="Low battery icon" class="invert" style="height:2rem;width:auto;" />
      </span>
    </div>
  </div>
</template>
