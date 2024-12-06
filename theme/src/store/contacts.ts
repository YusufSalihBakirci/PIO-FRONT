
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'

import { personal, organization } from "@/core/data/contact"

export const useContactsStore = defineStore('contacts', () => {

    let personals = ref(personal)
    let organizations = ref(organization)


    return {
        personals,
        organizations
    }
})
