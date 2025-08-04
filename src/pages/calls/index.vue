<script setup lang="ts">
import { useDate } from "vuetify";
import Sample from "@/assets/sample.wav";

const dateUtils = useDate();
const randDate = ref(dateUtils.format(new Date(), "fullDateTime24h"));
const opened = ref([]);

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
</script>

<template>
  <VMain>
    <VContainer fluid>
      <VRow>
        <VCol>
          <VTextField single-line clearable persistent-clear density="compact" rounded bg-color="#ffffff" variant="solo"
            hide-details placeholder="Number or contact name" prepend-inner-icon="$search" label="Search"></VTextField>
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
            <VListGroup value="something">
              <template #activator="{ props }">
                <VListItem prepend-avatar="https://i.pravatar.cc/300?u=001" title="long ass starknights name. idk why"
                  v-bind="props">
                  <template #subtitle>
                    <VLabel>
                      <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
                      <VIcon icon="$voicemail" color="success"></VIcon>&nbsp;
                      {{ randDate }}
                    </VLabel>
                  </template>
                </VListItem>
              </template>
              <VCard>
                <VCardText>
                  <audio ref="audioContainer" :src="Sample"></audio>
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
              <VDivider></VDivider>
            </VListGroup>
            <VListGroup value="starknight002">
              <template #activator="{ props }">
                <VListItem prepend-avatar="https://i.pravatar.cc/300?u=002" title="Starknight#002" v-bind="props">
                  <template #subtitle>
                    <VLabel>
                      <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
                      <VIcon icon="$voicemail"></VIcon>&nbsp;
                      {{ randDate }}
                    </VLabel>
                  </template>
                </VListItem>
              </template>
              <VCard>
                <VCardText>
                  <VRow>
                    <VCol cols="12">
                      <VSlider hide-details class="-mt-4" density="compact" track-size="2px" thumb-size="12px">
                      </VSlider>
                    </VCol>
                  </VRow>
                  <VRow dense>
                    <VCol cols="3">00.00</VCol>
                    <VCol cols="6"></VCol>
                    <VCol cols="3" class="text-right">99.99</VCol>
                  </VRow>
                  <VRow dense>
                    <VCol cols="2">
                      <VBtn icon="$play" color="white" density="compact"></VBtn>
                    </VCol>
                    <VCol cols="2">
                      <VBtn icon="$speaker" color="white" density="compact"></VBtn>
                    </VCol>
                    <VCol cols="4"></VCol>
                    <VCol cols="2" class="text-right">
                      <VBtn icon="$stop" color="white" density="compact"></VBtn>
                    </VCol>
                    <VCol cols="2" class="text-right">
                      <VBtn icon="$read" color="white" density="compact"></VBtn>
                    </VCol>
                  </VRow>
                  <VRow>
                    <VList density="comfortable">
                      <VListItem prepend-icon="$call" title="Voice Call"></VListItem>
                      <VListItem prepend-icon="$vidcall" title="Video Call"></VListItem>
                      <VListItem prepend-icon="$text" title="Send a Message"></VListItem>
                    </VList>
                  </VRow>
                </VCardText>
              </VCard>
              <VDivider></VDivider>
            </VListGroup>
            <VListGroup value="starknight003">
              <template #activator="{ props }">
                <VListItem prepend-avatar="https://i.pravatar.cc/300?u=003" title="Starknight#003" v-bind="props">
                  <template #subtitle>
                    <VLabel>
                      <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
                      <VIcon icon="$voicemail"></VIcon>&nbsp;
                      {{ randDate }}
                    </VLabel>
                  </template>
                </VListItem>
              </template>
              <VCard>
                <VCardText>
                  <VRow>
                    <VCol cols="12">
                      <VSlider hide-details class="-mt-4" density="compact" track-size="2px" thumb-size="12px">
                      </VSlider>
                    </VCol>
                  </VRow>
                  <VRow dense>
                    <VCol cols="3">00.00</VCol>
                    <VCol cols="6"></VCol>
                    <VCol cols="3" class="text-right">99.99</VCol>
                  </VRow>
                  <VRow dense>
                    <VCol cols="2">
                      <VBtn icon="$play" color="white" density="compact"></VBtn>
                    </VCol>
                    <VCol cols="2">
                      <VBtn icon="$speaker" color="white" density="compact"></VBtn>
                    </VCol>
                    <VCol cols="4"></VCol>
                    <VCol cols="2" class="text-right">
                      <VBtn icon="$stop" color="white" density="compact"></VBtn>
                    </VCol>
                    <VCol cols="2" class="text-right">
                      <VBtn icon="$read" color="white" density="compact"></VBtn>
                    </VCol>
                  </VRow>
                  <VRow>
                    <VList density="comfortable">
                      <VListItem prepend-icon="$call" title="Voice Call"></VListItem>
                      <VListItem prepend-icon="$vidcall" title="Video Call"></VListItem>
                      <VListItem prepend-icon="$text" title="Send a Message"></VListItem>
                    </VList>
                  </VRow>
                </VCardText>
              </VCard>
              <VDivider></VDivider>
            </VListGroup>
          </VList>
        </VCol>
      </VRow>
    </VContainer>
  </VMain>
</template>
