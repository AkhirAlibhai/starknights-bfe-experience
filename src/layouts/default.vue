<script setup lang="ts">
// Assets

import Jorb from "@/assets/jorb.gif";
import BatteryIcon from "~icons/material-symbols/battery-6-bar";
import CellIcon from "~icons/material-symbols/signal-cellular-4-bar";
import WiFiIcon from "~icons/material-symbols/signal-wifi-4-bar";

const defaultOpened = ref(0);
</script>

<template>
  <VApp>
    <RouterView #="{ Component }">
      <VSystemBar window>
        <span>PhaseTel</span>
        <VSpacer></VSpacer>
        <VIcon :icon="WiFiIcon"></VIcon>
        <VIcon :icon="CellIcon" class="ms-2"></VIcon>
        <VIcon :icon="BatteryIcon" class="ms-2"></VIcon>
      </VSystemBar>
      <component :is="Component"></component>
      <VBottomNavigation grow>
        <VDialog max-width="500px">
          <template #activator="{ props }">
            <VBtn icon="$menu" v-bind="props"></VBtn>
          </template>
          <VCard title="About">
            <VCardText>
              <VImg :src="Jorb" height="300px"></VImg>
              <VExpansionPanels variant="accordion" flat v-model="defaultOpened">
                <VExpansionPanel title="Starknights App" :value="0"
                  text="This application is a labour of love for our beloved alien idol princess">
                </VExpansionPanel>
                <VExpansionPanel title="Credits" :value="1">
                  <VExpansionPanelText>
                    <p>This app would not be possible without the hard work of the people below:</p>
                    <VList>
                      <VListItem title="Vue Team" prepend-icon="$search"></VListItem>
                      <VListItem title="Vuetify Team"></VListItem>
                    </VList>
                  </VExpansionPanelText>
                </VExpansionPanel>
                <VExpansionPanel title="License" :value="2" text="MIT License">
                </VExpansionPanel>
              </VExpansionPanels>
            </VCardText>
          </VCard>
        </VDialog>
        <VBtn to="/v2">
          <VIcon size="32">
            <VImg :src="Jorb"></VImg>
          </VIcon>
        </VBtn>
        <VBtn icon="$prev" @click="$router.back()"></VBtn>
      </VBottomNavigation>
    </RouterView>
  </VApp>
</template>
