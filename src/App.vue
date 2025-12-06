<script setup>
import { useRoute } from 'vue-router'
import PhoneContainer from '@/components/PhoneContainer.vue'

const route = useRoute()
</script>

<template>
  <PhoneContainer :blur="route.meta.blur">
    <RouterView />
  </PhoneContainer>
</template>
