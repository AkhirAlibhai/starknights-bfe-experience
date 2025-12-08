<route lang="json">{
  "meta": {
    "layout": "blank",
    "blur": true
  }
}</route>;

<script setup lang="ts">
import { useRouter } from 'vue-router'
import LockScreen from '@/components/screens/LockScreen.vue'

const router = useRouter()
const handleUnlock = () => router.push('/home')
</script>

<template>
  <LockScreen @unlock="handleUnlock" />
</template>
