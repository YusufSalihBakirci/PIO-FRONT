import { ref } from "vue"

export const title = ref<string>("")
export const desc = ref<string>("")
export const inputclasses = ref<string>('is-invalid')
export const itemclasses = ref<string>("is-invalid")

export function validated() {
    if (title.value.length < 5) {
        inputclasses.value = 'is-invalid'
    }
    else {
        inputclasses.value = 'is-valid'
    }

}
export function update() {

    if (desc.value.length < 4) {
        itemclasses.value = 'is-invalid'
    }
    else {
        itemclasses.value = 'is-valid'
    }
} 