<route lang="json">{
  "meta": {
    "layout": "unlocked",
    "blur": false
  }
}</route>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSound } from "@vueuse/sound"

import Dialing from "@/assets/tone_dial.wav"
import DialingFail from "@/assets/tone_fail.wav"
import { callLog } from '@/calls/registry'

const route = useRoute()
const id = computed(() => Number(route.params.id))

const selectedCall = computed(() => {
  return callLog[id.value]
})

const dialTone = useSound(Dialing)
const dialFailTone = useSound(DialingFail)

const dialing = ref(false)
const dialTonePlayback = ref(0)
const dialFail = ref(false)

watch(
  [
    dialTone.isPlaying,
    dialFailTone.isPlaying,
    dialing,
    dialFail,
    dialTonePlayback,
  ],
  ([playDial, playFail, dialing, fail, n]) => {
    if (dialing && !playDial && n < 4) {
      dialTone.play()
      dialTonePlayback.value = n + 1
      dialFail.value = n + 1 >= 4
    } else if (fail && !playFail && !playDial) {
      dialFailTone.play()
    }
  },
)

watch(
  () => route.params.id,
  () => {
    dialTone.stop()
    dialFailTone.stop()
    dialing.value = false
    dialTonePlayback.value = 0
    dialFail.value = false
  }
)

onUnmounted(() => {
  dialTone.stop()
  dialFailTone.stop()
})
</script>


<template>
  <VMain v-if="selectedCall">
    <VContainer fluid class="text-center">
      <VRow>
        <VCol cols="12">
          <VAvatar :image="selectedCall.avatar" size="256" />
        </VCol>
      </VRow>

      <VRow>
        <VCol cols="12">
          <span class="text-h6">{{ selectedCall.title }}</span>
        </VCol>
      </VRow>

      <template v-if="dialing">
        <VRow>
          <VCol cols="12">
            <VLabel>Dialing...</VLabel>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="3">
            <VBtn icon="$call" color="error"></VBtn>
          </VCol>
          <VCol cols="3">
            <VBtn icon="$speaker"></VBtn>
          </VCol>
          <VCol cols="3">
            <VBtn icon="$vidcall"></VBtn>
          </VCol>
          <VCol cols="3">
            <VBtn icon="$text"></VBtn>
          </VCol>
        </VRow>
      </template>

      <VRow v-else>
        <VCol cols="3">
          <VBtn icon="$call" color="success" @click="dialing = true" />
        </VCol>
      </VRow>
    </VContainer>
  </VMain>

  <VMain v-else>
    <VContainer>Call not found</VContainer>
  </VMain>
</template>
