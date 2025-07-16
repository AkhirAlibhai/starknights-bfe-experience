<template>
  <div id="root" class="w-screen h-[100dvh] flex items-center justify-center">
    <!-- Phone Container -->
    <div id="phonecontainer"
      :class="['aspect-[9/19.5] h-full max-w-[calc(100dvh*0.4615)] w-auto bg-cover bg-center text-white relative', { 'page-loaded': pageLoaded }]">
      <StatusBar />
      <!-- Clock & Date -->
      <div v-if="showTime" id="timedisplay" class="relative text-center mt-32">
        <p class="locking">{{ formattedDate }}</p>
        <p class="locking time">{{ formattedTime }}</p>
      </div>
      <!-- Lock -->
      <ul v-if="showUnlock" id="unlockbutton" class="locking buttons absolute left-0 right-0" style="bottom: 40%;">
        <li><button href="#" class="button n01" @click="unlockPhone">Tap to Unlock</button></li>
      </ul>

      <!-- Home Screen (split out as a component) -->
      <HomeScreen :showHomeScreen="showHomeScreen" @openPhoneApp="openPhoneApp" />

      <!-- Phone App (split out as a component) -->
      <PhoneApp :showPhoneApp="showPhoneApp" @closePhoneApp="closePhoneApp" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HomeScreen from './HomeScreen.vue'
import PhoneApp from './PhoneApp.vue'
import StatusBar from './StatusBar.vue'

const pageLoaded = ref(false)
const showTime = ref(true)
const showUnlock = ref(true)
const showHomeScreen = ref(false)
const showPhoneApp = ref(false)

const unlockPhone = () => {
  showTime.value = false
  showUnlock.value = false
  showHomeScreen.value = true
}

const openPhoneApp = () => {
  showPhoneApp.value = true
  showHomeScreen.value = false
}
const closePhoneApp = () => {
  showPhoneApp.value = false
  showHomeScreen.value = true
}

const formattedDate = ref('')
const formattedTime = ref('')

const updateTime = () => {
  const now = new Date()
  formattedDate.value = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
  formattedTime.value = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

let intervalId
onMounted(() => {
  setTimeout(() => {
    pageLoaded.value = true
  }, 10)
  updateTime()
  intervalId = setInterval(updateTime, 1000)
})
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
