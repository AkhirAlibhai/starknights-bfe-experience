<template>
    <v-row class="status-bar px-4 py-2 h-16" align="center" justify="space-between" no-gutters>
        <v-col cols="auto">
            <span class="flex items-center text-3xl font-mono">PhaseTel</span>
        </v-col>
        <v-col cols="auto" class="d-flex align-center">
            <v-img src="/src/assets/signal-status.png" alt="Signal status icon" class="mx-2 invert" width="32"
                height="32" />
            <v-img src="/src/assets/internet.png" alt="Internet connection icon" class="mx-2 invert" width="32"
                height="32" />
            <v-img src="/src/assets/low-battery.png" alt="Low battery icon" class="mx-2 invert" width="32"
                height="32" />
        </v-col>
    </v-row>
</template>
