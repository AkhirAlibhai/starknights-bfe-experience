<script setup>
import { defineProps, ref, onMounted } from "vue";
import StatusBar from "@/components/status-bar/StatusBar.vue";

const props = defineProps({
  blur: { type: Boolean, default: false }
});

const pageLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    pageLoaded.value = true;
  }, 10);
});
</script>

<template>
  <div id="root" class="w-screen h-[100dvh] flex items-center justify-center">
    <div id="phonecontainer" :class="[
      'aspect-[9/19.5] h-full max-w-[calc(100dvh*0.4615)] w-auto bg-cover bg-center relative text-white',
      { 'page-loaded': pageLoaded },
      { 'phone-blur': props.blur }
    ]">
      <StatusBar />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.phone-blur {
  backdrop-filter: blur(12px);
  transition: backdrop-filter 0.35s ease;
}
</style>
