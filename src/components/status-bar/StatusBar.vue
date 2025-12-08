<script setup lang="ts">

  import internetImg from "@/assets/internet.png";
  import lowBatteryImg from "@/assets/low-battery.png";
  import signalStatusImg from "@/assets/signal-status.png";

  import StatusIcon from "./StatusIcon.vue";

  const icons = [
    { src: signalStatusImg, alt: "Signal status" },
    { src: internetImg, alt: "Internet connection" },
    { src: lowBatteryImg, alt: "Low battery" }
  ];
  </script>

  <template>
    <div class="status-bar h-16 px-4 py-6 flex justify-between items-center">
      <span class="font-mono text-3xl">PhaseTel</span>

      <div class="flex items-center space-x-4">
        <StatusIcon
          v-for="icon in icons"
          :key="icon.alt"
          :src="icon.src"
          :alt="icon.alt"
        />
      </div>
    </div>
  </template>
