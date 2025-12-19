<route lang="json">{
  "meta": {
    "layout": "unlocked",
    "blur": false
  }
}</route>

<script setup lang="ts">
import { type CallDefinition } from '@/calls/call';
import { callLog } from '@/calls/registry';

</script>

<template>
  <VMain>
    <VContainer fluid>
      <VRow>
        <VCol>
          <VLabel>Credits</VLabel>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VList density="comfortable" rounded="xl" open-strategy="single">
            <VListGroup v-for="log in callLog">
              <template #activator="{ props }">
                <VListItem :prepend-avatar="log.avatar" :title="log.title" v-bind="props"/>
              </template>
              <VCard>
                <VCardText>
                  <VRow>
                    <VList density="comfortable">
                      <VListItem prepend-icon="$call" title="Call Link" :to="`/calls/${log.id}`"></VListItem>
                      <VListItem prepend-icon="$edit" :title="`Writer: ${log.author}`"></VListItem>
                      <VListItem prepend-icon="$speaker" :title="`Speaker: ${log.voiced}`"></VListItem>
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
