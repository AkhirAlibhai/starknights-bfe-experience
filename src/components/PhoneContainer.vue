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
      <!-- Clock & Date -->
      <div v-if="showTime" id="timedisplay" class="relative text-center mt-32">
        <p class="locking">{{ formattedDate }}</p>
        <p class="locking time">{{ formattedTime }}</p>
      </div>
      <!-- Lock -->
      <ul v-if="showUnlock" id="unlockbutton" class="locking buttons absolute left-0 right-0" style="bottom: 40%;">
        <li><button href="#" class="button n01" @click="unlockPhone">Tap to Unlock</button></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import internetImg from "@/assets/internet.png";
import lowBatteryImg from "@/assets/low-battery.png";
import signalStatusImg from "@/assets/signal-status.png";

const pageLoaded = ref(false);
const showTime = ref(true);
const showUnlock = ref(true);

const unlockPhone = () => {
	showTime.value = false;
	showUnlock.value = false;
};

const formattedDate = ref("");
const formattedTime = ref("");

const updateTime = () => {
	const now = new Date();
	formattedDate.value = now.toLocaleDateString("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric",
	});
	formattedTime.value = now.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});
};

let intervalId;
onMounted(() => {
	setTimeout(() => {
		pageLoaded.value = true;
	}, 10);
	updateTime();
	intervalId = setInterval(updateTime, 1000);
});
onUnmounted(() => {
	if (intervalId) {
		clearInterval(intervalId);
	}
});
</script>
