import { defineStore } from 'pinia'
import { ref } from 'vue'
import { animationrating, numberrating } from "@/core/data/advance"
export const useAdvanceStore = defineStore('advance', () => {

    let data = ref(animationrating)
    let numbers = ref(numberrating)
    return {
        data,
        numbers
    }
})
