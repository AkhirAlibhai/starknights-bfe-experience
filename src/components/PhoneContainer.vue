<template>
  <div id="root" class="w-screen h-[100dvh] flex items-center justify-center">
    <!-- Phone Container -->
    <div
      id="phonecontainer"
      :class="['aspect-[9/19.5] h-full max-w-[calc(100dvh*0.4615)] w-auto bg-cover bg-center text-white relative', { 'page-loaded': pageLoaded }]"
    >
      <!-- Status Bar -->
      <div class="justify-between status-bar px-4 py-6 h-16 flex items-center">
        <span class="flex items-center text-3xl font-mono">PhaseTel</span>
        <div class="flex space-x-4 items-center h-full">
          <span class="flex items-center h-full">
            <img :src="signalStatusImg" class="invert" style="height:2rem;width:auto;" />
          </span>
          <span class="flex items-center h-full">
            <img :src="internetImg" class="invert" style="height:2rem;width:auto;" />
          </span>
          <span class="flex items-center h-full">
            <img :src="lowBatteryImg" class="invert" style="height:2rem;width:auto;" />
          </span>
        </div>
      </div>
      <!-- Clock & Date -->
      <div v-if="showTime" id="timedisplay" class="relative text-center mt-32">
        <p class="locking">{{ formattedDate }}</p>
        <p class="locking time">{{ formattedTime }}</p>
      </div>
      <!-- Lock -->
      <ul v-if="showUnlock" id="unlockbutton" class="locking buttons absolute left-0 right-0" style="bottom: 40%;">
        <li><a href="#" class="button n01" @click.prevent="unlockPhone">Tap to Unlock</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import signalStatusImg from '@/assets/signal-status.png'
import internetImg from '@/assets/internet.png'
import lowBatteryImg from '@/assets/low-battery.png'

const pageLoaded = ref(false)
const showTime = ref(true)
const showUnlock = ref(true)

const unlockPhone = () => {
  showTime.value = false
  showUnlock.value = false
}

const formattedDate = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
})
const formattedTime = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

onMounted(() => {
  setTimeout(() => {
    pageLoaded.value = true
  }, 10)
})
</script>
