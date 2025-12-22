<route lang="json">{
  "meta": {
    "layout": "unlocked",
    "blur": false
  }
}</route>

<script setup lang="ts">
import { type CallDefinition } from '@/calls/call';
import { callLog } from '@/calls/registry';
import { computed } from 'vue'

const opened = ref<number[]>([]);
const search = ref('')

const audioRefs = ref<Record<number, HTMLAudioElement>>({});
const audioStates = ref<Record<number, { currentTime: number; duration: number; playing: boolean }>>({});

let lastPlayed = -1;

const filteredCallLog = computed(() => {
  if (!search.value) return callLog

  const q = search.value.toLowerCase()

  return callLog.filter(log =>
    log.title.toLowerCase().includes(q)
  )
})


const displayTime = (time: number) => {
  const sec = Math.round(time % 60);
  const min = Math.floor(time / 60);
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
};


function initializeAudio(log: CallDefinition) {
  if (!audioRefs.value[log.id]) {
    const audioElement = new Audio(log.audio);
    audioRefs.value[log.id] = audioElement;

    audioStates.value[log.id] = {
      currentTime: 0,
      duration: 0,
      playing: false,
    };

    audioElement.addEventListener("loadedmetadata", () => {
      audioStates.value[log.id].duration = audioElement.duration;
    });

    audioElement.addEventListener("timeupdate", () => {
      audioStates.value[log.id].currentTime = audioElement.currentTime;
    });

    audioElement.addEventListener("play", () => {
      audioStates.value[log.id].playing = true;

      if (lastPlayed !== -1 && lastPlayed !== log.id) {
        pauseAudio(lastPlayed);
      }
      lastPlayed = log.id;
    });
    audioElement.addEventListener("pause", () => {
      audioStates.value[log.id].playing = false;
    });
  }
}

function pauseAudio(logId: number) {
  const audio = audioRefs.value[logId];
  if (audio) {
    audio.pause();
  }
}

function togglePlay(logId: number) {
  const audio = audioRefs.value[logId];
  if (audio) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

function updateCurrentTime(logId: number, value: number) {
  const audio = audioRefs.value[logId];
  if (audio) {
    audio.currentTime = value; // Update the currentTime of the audio element
  }
}

onUnmounted(() => {
  pauseAudio(lastPlayed);
})
</script>

<template>
  <VMain>
    <VContainer fluid>
      <VRow>
        <VCol>
          <VTextField v-model="search" single-line clearable persistent-clear density="compact" rounded
            bg-color="#ffffff" variant="solo" hide-details placeholder="Search by Title" prepend-inner-icon="$search"
            label="Search" />
        </VCol>
      </VRow>
      <VRow class="mt-4" justify="space-between">
        <VLabel>Call Logs</VLabel>
        <VBtn variant="text" color="primary" to="/calls/credits" class="px-0">Credits</VBtn>
      </VRow>
      <VRow>
        <VCol>
          <VList v-if="filteredCallLog.length" density="comfortable" rounded="xl" open-strategy="single"
            v-model:opened="opened">
            <VListGroup v-for="log in filteredCallLog" :key="log.id" :value="log.id" @click="initializeAudio(log)">
              <template #activator="{ props }">
                <VListItem :prepend-avatar="log.avatar" :title="log.title" v-bind="props">
                  <template #subtitle>
                    <VLabel>
                      <VIcon icon="$callMissed" color="error" class="ms-2" />
                      <VIcon icon="$voicemail" color="success" />
                      {{ log.date }}
                    </VLabel>
                  </template>
                </VListItem>
              </template>
              <VCard>
                <VCardText>
                  <VRow>
                    <VCol cols="12">
                      <VSlider v-if="audioStates[log.id]" :min="0" :max="audioStates[log.id].duration"
                        :model-value="audioStates[log.id].currentTime"
                        @update:model-value="updateCurrentTime(log.id, $event)" hide-details class="-mt-4"
                        density="compact" track-size="2px" thumb-size="12px"></VSlider>
                    </VCol>
                  </VRow>
                  <VRow dense>
                    <VCol cols="3">{{ displayTime(audioStates[log.id]?.currentTime || 0) }}</VCol>
                    <VCol cols="6"></VCol>
                    <VCol cols="3" class="text-right">{{ displayTime(audioStates[log.id]?.duration || 0) }}</VCol>
                  </VRow>
                  <VRow dense>
                    <VCol cols="2">
                      <VBtn v-if="audioStates[log.id]" :icon="!audioStates[log.id].playing ? '$play' : '$pause'"
                        color="white" density="compact" @click="togglePlay(log.id)"></VBtn>
                    </VCol>
                    <VCol cols="2">
                      <VBtn v-if="audioRefs[log.id]" :icon="audioRefs[log.id]?.muted ? '$mute' : '$speaker'"
                        color="white" density="compact" @click="audioRefs[log.id].muted = !audioRefs[log.id].muted">
                      </VBtn>
                    </VCol>
                    <VCol cols="4"></VCol>
                    <VCol cols="2" class="text-right">
                      <VBtn v-if="audioRefs[log.id]" icon="$stop" color="white" density="compact" @click="() => {
                        audioRefs[log.id].pause();
                        audioRefs[log.id].currentTime = 0;
                      }"></VBtn>
                    </VCol>
                    <VCol cols="2" class="text-right">
                      <VBtn icon="$read" color="white" density="compact"></VBtn>
                    </VCol>
                  </VRow>
                  <VRow>
                    <VList density="comfortable">
                      <VListItem prepend-icon="$call" title="Voice Call" :to="`/calls/${log.id}`"></VListItem>
                      <VListItem prepend-icon="$vidcall" title="Video Call" :to="`/calls/${log.id}?video=true`">
                      </VListItem>
                      <VListItem prepend-icon="$text" title="Send a Message" disabled></VListItem>
                    </VList>
                  </VRow>
                </VCardText>
              </VCard>
              <VDivider />
            </VListGroup>
          </VList>
          <VCard v-else class="pa-4 text-center">
            No call logs found.
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </VMain>
</template>
