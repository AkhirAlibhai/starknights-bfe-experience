<route lang="json">{
  "meta": {
    "layout": "unlocked",
    "blur": false
  }
}</route>

<script setup lang="ts">
import Jorb from "@/assets/jorb.gif";

</script>

<template>
  <VMain class="fill-height">
    <VContainer fluid class="fill-height">
      <VRow class="fill-height" align="center" justify="center">
        <VCol class="text-center">
          <VImg :src="Jorb" class="flex-grow-0 w-100" cover />
          <VLabel>
            Coming Soon!<br />
            DM airline_food or ashers2718 for details!
          </VLabel>
        </VCol>
      </VRow>
    </VContainer>
  </VMain>
</template>
