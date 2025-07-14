<template>
  <div id="root" class="w-screen h-[100dvh] flex items-center justify-center">
    <!-- Phone Container -->
    <div id="phonecontainer"
      :class="['aspect-[9/19.5] h-full max-w-[calc(100dvh*0.4615)] w-auto bg-cover bg-center text-white relative', { 'page-loaded': pageLoaded }]">
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

      <!-- Home Screen (split out as a component) -->
      <HomeScreen :showHomeScreen="showHomeScreen" @openPhoneApp="openPhoneApp" />

      <!-- Phone App UI (Dial Pad) -->
      <div id="phoneApp" v-show="showPhoneApp"
        class="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center z-30">
        <div class="w-full max-w-xs mx-auto p-4">
          <input type="text" :value="dialInput" readonly
            class="w-full mb-4 p-2 rounded text-lg text-center bg-gray-800 text-white" />
          <div class="grid grid-cols-3 gap-4 mb-4 w-full">
            <button v-for="n in dialPadNumbers" :key="n"
              class="bg-gray-800 text-white rounded-xl h-16 w-full text-3xl dial-number" @click="addDigit(n)">{{ n
              }}</button>
            <div> </div>
            <button
              class="bg-green-600 hover:bg-green-700 text-white rounded-full h-16 w-full flex items-center justify-center text-2xl shadow-lg">
              📞
            </button>
            <button
              class="bg-red-600 hover:bg-red-700 text-white rounded-full h-16 w-full flex items-center justify-center text-2xl shadow-lg"
              @click="deleteDigit">
              ⌫
            </button>
          </div>
          <button class="mt-2 w-full bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-800 transition"
            @click="closePhoneApp">Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import signalStatusImg from '@/assets/signal-status.png'
import internetImg from '@/assets/internet.png'
import lowBatteryImg from '@/assets/low-battery.png'
import HomeScreen from './HomeScreen.vue'

const pageLoaded = ref(false)
const showTime = ref(true)
const showUnlock = ref(true)
const showHomeScreen = ref(false)
const showPhoneApp = ref(false)
const dialInput = ref('')
const dialPadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']

const unlockPhone = () => {
  showTime.value = false
  showUnlock.value = false
  showHomeScreen.value = true
}

const openPhoneApp = () => {
  showPhoneApp.value = true
}
const closePhoneApp = () => {
  showPhoneApp.value = false
}
const addDigit = (digit) => {
  dialInput.value += digit
}
const deleteDigit = () => {
  dialInput.value = dialInput.value.slice(0, -1)
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

onMounted(() => {
  setTimeout(() => {
    pageLoaded.value = true
  }, 10)
  updateTime()
  setInterval(updateTime, 1000)
})
</script>
