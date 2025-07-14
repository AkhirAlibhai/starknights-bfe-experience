<template>
    <div id="phoneApp" v-show="showPhoneApp" class="absolute inset-0 flex flex-col items-center justify-center z-30">
        <div class="w-full max-w-xs mx-auto p-4">
            <input type="text" :value="dialInput" readonly
                class="w-full mb-4 p-2 rounded text-lg text-center bg-gray-800 text-white" />
            <div class="grid grid-cols-3 gap-4 mb-4 w-full">
                <button v-for="n in dialPadNumbers" :key="n"
                    class="bg-gray-800 text-white rounded-xl h-16 w-full text-3xl dial-number" @click="addDigit(n)">{{ n
                    }}</button>
                <div> </div>
                <button
                    class="bg-green-600 hover:bg-green-700 text-white rounded-full h-16 w-full flex items-center justify-center text-2xl shadow-lg">
                    📞
                </button>
                <button
                    class="bg-red-600 hover:bg-red-700 text-white rounded-full h-16 w-full flex items-center justify-center text-2xl shadow-lg"
                    @click="deleteDigit">
                    ⌫
                </button>
            </div>
            <button class="mt-2 w-full bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-800 transition"
                @click="closePhoneApp">Close
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const dialInput = ref('')
const dialPadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']

const props = defineProps({
    showPhoneApp: Boolean,
    dialInput: String,
})
const emit = defineEmits(['addDigit', 'deleteDigit', 'closePhoneApp'])
const addDigit = (digit) => {
    dialInput.value += digit
}
const deleteDigit = () => {
    dialInput.value = dialInput.value.slice(0, -1)
}
const closePhoneApp = () => emit('closePhoneApp')
</script>
