<script setup lang="ts">
// Icons

import JannualIcon from "~icons/material-symbols/bar-chart-4-bars";
import SolitaireIcon from "~icons/material-symbols/cards-star";
import DarkModeIcon from "~icons/material-symbols/dark-mode";
import GalleryIcon from "~icons/material-symbols/gallery-thumbnail";
import PhoneIcon from "~icons/material-symbols/phone-enabled";

// Composables

import { useDisplay, useTheme } from "vuetify";

const { mdAndUp } = useDisplay();
const theme = useTheme()
</script>

<route>
{
  meta: {
    layout: "homescreen"
  }
}
</route>

<template>
  <VMain>
    <VContainer fluid>
      <VRow>
        <VCol :cols="mdAndUp ? 1 : 3">
          <RouterLink to="#" style="color: inherit;" @click="theme.cycle()"
            class="d-flex flex-column align-center text-center text-decoration-none">
            <VIcon :icon="DarkModeIcon" size="64" color="#ffff00"></VIcon>
            <span>Jisplay Jode</span>
          </RouterLink>
        </VCol>
        <VCol :cols="mdAndUp ? 1 : 3">
          <RouterLink to="/jannual" style="color: inherit;"
            class="d-flex flex-column align-center text-center text-decoration-none">
            <VIcon :icon="GalleryIcon" size="64" color="#ffffff"
              style="background-color: blue;border-radius: 1rem;padding: 0.5rem;">
            </VIcon>
            <span>Jallery</span>
          </RouterLink>
        </VCol>
        <VCol :cols="mdAndUp ? 1 : 3">
          <RouterLink to="/jannual" style="color: inherit;"
            class="d-flex flex-column align-center text-center text-decoration-none">
            <VBadge content="2" color="#ff0000">
              <VIcon :icon="JannualIcon" size="64" color="#ffffff"
                style="background-color: blue;border-radius: 1rem;padding: 0.5rem;">
              </VIcon>
            </VBadge>
            <span>Jannual Jeport</span>
          </RouterLink>
        </VCol>
        <VCol :cols="mdAndUp ? 1 : 3">
          <RouterLink to="/calls" style="color: inherit;"
            class="d-flex flex-column align-center text-center text-decoration-none">
            <VBadge content="99+" color="#ff0000">
              <VIcon :icon="PhoneIcon" size="64" color="#ffffff"
                style="background-color: limegreen;border-radius: 1rem;padding: 0.5rem;"></VIcon>
            </VBadge>
            <span>Jhone</span>
          </RouterLink>
        </VCol>
        <VCol :cols="mdAndUp ? 1 : 3">
          <RouterLink to="#" style="color: inherit;"
            class="d-flex flex-column align-center text-center text-decoration-none">
            <VIcon :icon="SolitaireIcon" size="64" color="#ffffff"
              style="background-color: crimson;border-radius: 1rem;padding: 0.5rem;"></VIcon>
            <span>Jolitaire</span>
          </RouterLink>
        </VCol>
      </VRow>
    </VContainer>
  </VMain>
</template>
