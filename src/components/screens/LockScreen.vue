<template>
  <div class="lock-screen">
    <div v-if="showTime" id="timedisplay" class="relative text-center mt-32">
      <p class="locking">{{ formattedDate }}</p>
      <p class="locking time">{{ formattedTime }}</p>
    </div>

    <ul
      v-if="showUnlock"
      id="unlockbutton"
      class="locking buttons absolute left-0 right-0"
      style="bottom: 40%;"
    >
      <li>
        <button class="button n01" @click="emitUnlock">
          Tap to Unlock
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["unlock"]);

const showTime = ref(true);
const showUnlock = ref(true);

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
  updateTime();
  intervalId = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});

const emitUnlock = () => {
  showTime.value = false;
  showUnlock.value = false;
  emit("unlock");
};
</script>
