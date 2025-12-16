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

import DialingFail from "@/assets/tone_fail.wav"
import { callLog } from '@/calls/registry'

const route = useRoute()
const id = computed(() => {
  const params = route.params as { id: string }
  return Number(params.id)
})

const selectedCall = computed(() => {
  return callLog[id.value]
})

const dialFailTone = useSound(DialingFail)
const callAudio = new Audio(selectedCall.value?.audio || "")

const dialing = ref(false)

function pickUp() {
  dialing.value = true
  callAudio.play()
}

function hangUp() {
  dialing.value = false
  callAudio.pause()
  callAudio.currentTime = 0
  dialFailTone.play()
}

callAudio.addEventListener("timeupdate", () => {
  if (callAudio.ended) {
    hangUp()
  }
});


watch(
  () => id,
  () => {
    callAudio.pause()
    dialFailTone.stop()
    dialing.value = false
  }
)

onUnmounted(() => {
  callAudio.pause()
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
          <VCol cols="3">
            <VBtn icon="$call" color="error" @click="hangUp"></VBtn>
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

      <VRow justify="center" v-else>
        <VBtn icon="$call" color="success" @click="pickUp" />
      </VRow>
    </VContainer>
  </VMain>

  <VMain v-else>
    <VContainer>Call not found</VContainer>
  </VMain>
</template>
