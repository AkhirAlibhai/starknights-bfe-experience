<script setup lang="ts">
import { useDate } from "vuetify";
import Sample from "@/assets/sample.wav";
import callData from "@/data/calls.json";

const dateUtils = useDate();
const randDate = ref(dateUtils.format(new Date(), "fullDateTime24h"));
const opened = ref<number[]>([]);

const container = useTemplateRef("audioContainer");
const audio = useMediaControls(container);
const displayTime = computed(() => {
  const sec = Math.round(audio.currentTime.value % 60);
  const min = Math.floor(audio.currentTime.value / 60);
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
});
const displayDuration = computed(() => {
  const sec = Math.round(audio.duration.value % 60);
  const min = Math.floor(audio.duration.value / 60);
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
});

interface CallLog {
  id: number
  avatar: string
  title: string
  missed: boolean
  voicemail: boolean
  timestamp: string
  audio: string
  date: string
}

function readCallsConfig(): CallLog[] {
  return (callData as CallLog[]).map((c, i) => {
    const id = c.id || `call-${i}`;
    return {
      id,
      avatar: c.avatar,
      title: c.title,
      missed: !!c.missed,
      voicemail: !!c.voicemail,
      timestamp: c.timestamp,
      audio: c.audio,
      date: dateUtils.format(new Date(c.timestamp), "fullDateTime24h")
    } as CallLog;
  });
}

const callLogs = ref<CallLog[]>(readCallsConfig());

</script>

<template>
  <VMain>
    <VContainer fluid>
      <VRow>
        <VCol>
          <VTextField single-line clearable persistent-clear density="compact" rounded bg-color="#ffffff" variant="solo"
            hide-details placeholder="Number or contact name" prepend-inner-icon="$search" label="Search" />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VLabel>Call Logs</VLabel>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VList density="comfortable" rounded="xl" open-strategy="single" v-model:opened="opened">
            <VListGroup v-for="log in callLogs" :key="log.id" :value="log.id"
              :prepend-icon="opened.includes(log.id) ? '$expandLess' : '$expandMore'">
              <template #activator="{ props }">
                <VListItem :prepend-avatar="log.avatar" :title="log.title" v-bind="props">
                  <template #subtitle>
                    <VLabel>
                      <VIcon v-if="log.missed" icon="$callMissed" color="error" class="ms-2" />
                      <VIcon v-if="log.voicemail" icon="$voicemail" color="success" />
                      {{ log.date }}
                    </VLabel>
                  </template>
                </VListItem>
              </template>
              <VCard>
                <VCardText>
                  <audio ref="audioContainer" :src="log.audio || Sample" />
                  <VRow>
                    <VCol cols="12">
                      <VSlider min="0" :max="audio.duration.value" v-model="audio.currentTime.value" hide-details
                        class="-mt-4" density="compact" track-size="2px" thumb-size="12px"></VSlider>
                    </VCol>
                  </VRow>
                  <VRow dense>
                    <VCol cols="3">{{ displayTime }}</VCol>
                    <VCol cols="6"></VCol>
                    <VCol cols="3" class="text-right">{{ displayDuration }}</VCol>
                  </VRow>
                  <VRow dense>
                    <VCol cols="2">
                      <VBtn :icon="!audio.playing.value ? '$play' : '$pause'" color="white" density="compact"
                        @click="audio.playing.value = !audio.playing.value"></VBtn>
                    </VCol>
                    <VCol cols="2">
                      <VBtn :icon="!audio.muted.value ? '$speaker' : '$mute'" color="white" density="compact"
                        @click="audio.muted.value = !audio.muted.value"></VBtn>
                    </VCol>
                    <VCol cols="4"></VCol>
                    <VCol cols="2" class="text-right">
                      <VBtn icon="$stop" color="white" density="compact"
                        @click="() => { audio.playing.value = false; audio.currentTime.value = 0 }"></VBtn>
                    </VCol>
                    <VCol cols="2" class="text-right">
                      <VBtn icon="$read" color="white" density="compact"></VBtn>
                    </VCol>
                  </VRow>
                  <VRow>
                    <VList density="comfortable">
                      <VListItem prepend-icon="$call" title="Voice Call" to="/calls/001"></VListItem>
                      <VListItem prepend-icon="$vidcall" title="Video Call" to="/calls/001?video=true"></VListItem>
                      <VListItem prepend-icon="$text" title="Send a Message" disabled></VListItem>
                    </VList>
                  </VRow>
                </VCardText>
              </VCard>
              <VDivider />
            </VListGroup>
          </VList>
        </VCol>
      </VRow>
    </VContainer>
  </VMain>
</template>
