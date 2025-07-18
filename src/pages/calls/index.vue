<script setup lang="ts">
import { useDate, useTheme } from "vuetify";

const dateUtils = useDate();
const randDate = ref(dateUtils.format(new Date(), "fullDateTime24h"))
</script>

<template>
  <VMain>
    <VContainer fluid>
      <VRow>
        <VCol>
          <VTextField single-line clearable persistent-clear density="comfortable" rounded bg-color="#ffffff"
            variant="solo" hide-details placeholder="Number or contact name" prepend-inner-icon="$search"
            label="Search"></VTextField>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VList density="comfortable">
            <VListItem to="/calls/someid" prepend-avatar="https://i.pravatar.cc/300?u=001" title="long ass starknights name. idk why" :subtitle="randDate">
              <template #append>
                <VIcon icon="$voicemail" color="success"></VIcon>
                <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
              </template>
            </VListItem>
            <VListItem prepend-avatar="https://i.pravatar.cc/300?u=002" title="Starknight #002" :subtitle="randDate">
              <template #append>
                <VIcon icon="$voicemail" color="success"></VIcon>
                <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
              </template>
            </VListItem>
            <VListItem prepend-avatar="https://i.pravatar.cc/300?u=003" title="Starknight #003" :subtitle="randDate">
              <template #append>
                <VIcon icon="$voicemail" color="success"></VIcon>
                <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
              </template>
            </VListItem>
            <VListItem prepend-avatar="https://i.pravatar.cc/300?u=004" title="Starknight #004" :subtitle="randDate">
              <template #append>
                <VIcon icon="$voicemail"></VIcon>
                <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
              </template>
            </VListItem>
            <VListItem prepend-avatar="https://i.pravatar.cc/300?u=005" title="Starknight #005" :subtitle="randDate">
              <template #append>
                <VIcon icon="$voicemail"></VIcon>
                <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
              </template>
            </VListItem>
            <VListItem prepend-avatar="https://i.pravatar.cc/300?u=006" title="Starknight #006" :subtitle="randDate">
              <template #append>
                <VIcon icon="$voicemail"></VIcon>
                <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
              </template>
            </VListItem>
            <VListItem prepend-avatar="https://i.pravatar.cc/300?u=007" title="Starknight #007" :subtitle="randDate">
              <template #append>
                <VIcon icon="$voicemail"></VIcon>
                <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
              </template>
            </VListItem>
            <VListItem prepend-avatar="https://i.pravatar.cc/300?u=008" title="Starknight #008" :subtitle="randDate">
              <template #append>
                <VIcon icon="$voicemail"></VIcon>
                <VIcon icon="$callMissed" color="error" class="ms-2"></VIcon>
              </template>
            </VListItem>
          </VList>
        </VCol>
      </VRow>
    </VContainer>
  </VMain>
</template>
