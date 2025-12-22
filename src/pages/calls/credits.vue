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
          <VLabel>Project Lead</VLabel>
          <VListItem title="Awa+Anon" />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VLabel>Call Logs</VLabel>
          <VList density="comfortable" rounded="xl" open-strategy="single">
            <VListGroup v-for="log in callLog">
              <template #activator="{ props }">
                <VListItem :prepend-avatar="log.avatar" :title="log.title" v-bind="props" />
              </template>
              <VCard>
                <VCardText>
                  <VRow>
                    <VList density="comfortable">
                      <VListItem prepend-icon="$call" title="Call Link" :to="`/calls/${log.id}`" />
                      <VListItem prepend-icon="$edit" :title="`Writer: ${log.author}`" />
                      <VListItem prepend-icon="$speaker" :title="`Speaker: ${log.voiced}`" />
                      <VListItem prepend-icon="$book" title="Script:" />
                      <VCardText class="text-body-2">
                        {{ log.script }}
                      </VCardText>
                    </VList>
                  </VRow>
                </VCardText>
              </VCard>
              <VDivider />
            </VListGroup>
          </VList>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VLabel>Code Monkeys</VLabel>
          <VListItem title="Brownie" />
          <VListItem title="computed_fn" />
        </VCol>
      </VRow>
    </VContainer>
  </VMain>
</template>
