<script setup lang="ts">
// Assets
import Jorb from "@/assets/jorb.gif";

const defaultOpened = ref(0);
</script>

<template>
  <RouterView #="{ Component }">
    <component :is="Component"></component>
    <VBottomNavigation grow>
      <VDialog max-width="500px">
        <template #activator="{ props }">
          <VBtn icon="$menu" v-bind="props" :active="false"></VBtn>
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
      <VBtn @click="$router.push('/home')" :active="false">
        <VIcon size="32">
          <VImg :src="Jorb"></VImg>
        </VIcon>
      </VBtn>
      <VBtn icon="$prev" @click="$router.back()" :active="false"></VBtn>
    </VBottomNavigation>
  </RouterView>
</template>
