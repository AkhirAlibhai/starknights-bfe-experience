<template>
  <div id="root" class="w-screen h-[100dvh] flex items-center justify-center">
    <div
      id="phonecontainer"
      :class="[
        'aspect-[9/19.5] h-full max-w-[calc(100dvh*0.4615)] w-auto bg-cover bg-center text-white relative',
        { 'page-loaded': pageLoaded }
      ]"
    >
      <StatusBar />

      <LockScreen v-if="isLocked" @unlock="handleUnlock" />

      <!-- When unlocked, render the rest of the phone (slot or route) -->
      <slot v-else />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import StatusBar from "@/components/status-bar/StatusBar.vue";
import LockScreen from "@/components/screens/LockScreen.vue";

const pageLoaded = ref(false);
const isLocked = ref(true);

const handleUnlock = () => {
  isLocked.value = false;
};

onMounted(() => {
  setTimeout(() => (pageLoaded.value = true), 10);
});
</script>
