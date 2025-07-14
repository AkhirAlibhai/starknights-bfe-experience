<template>
    <div id="homescreen" v-show="showHomeScreen"
        class="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div class="grid grid-cols-3 gap-6 p-8">
            <div class="flex flex-col items-center">
                <div class="bg-gray-800 rounded-2xl w-16 h-16 flex items-center justify-center text-3xl cursor-pointer"
                    @click="openPhoneApp">
                    📞</div>
                <span class="mt-2 text-sm text-white">Phone</span>
            </div>
            <div class="flex flex-col items-center">
                <div class="bg-gray-800 rounded-2xl w-16 h-16 flex items-center justify-center text-3xl cursor-pointer">
                    💬</div>
                <span class="mt-2 text-sm text-white">Voicemail</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
    showHomeScreen: Boolean
})
const emit = defineEmits(['openPhoneApp'])
const openPhoneApp = () => emit('openPhoneApp')
</script>
