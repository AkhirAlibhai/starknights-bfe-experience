<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import PhoneContainer from "@/components/PhoneContainer.vue";

const router = useRouter();
const route = useRoute();

const ready = ref(false);

onMounted(async () => {
  await router.isReady();
  ready.value = true;
});
</script>

<template>
  <VApp>
    <div v-if="ready">
      <PhoneContainer :meta-ready="ready" :blur="route.meta?.blur">
        <RouterView />
      </PhoneContainer>
    </div>

    <div v-else style="width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;">
    </div>
  </VApp>
</template>
