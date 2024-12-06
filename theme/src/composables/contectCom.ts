import { ref, inject } from 'vue'
import { personal } from "@/core/data/contact"
export let src = ref<string>('null')
export let filtered = ref<boolean>(false)
export let filter = ref<boolean>(false)
export let lastModified = ref(null)

export function loadFile(event: any, contact: any) {
    const file = event.target.files[0];
    src.value = URL.createObjectURL(file);
    contact.imgUrl = src.value
}

export function collapseFilter() {
    filtered.value = !filtered.value;

}
export function collapse() {
    filter.value = !filter.value;
}
