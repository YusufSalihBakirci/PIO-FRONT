<template>
    <div class="tap-top" :style="[display ? { 'display': 'block' } : { 'display': 'none' }]" @click="executeScroll()"><i
            class="iconly-Arrow-Up icli"></i></div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue"

const display = ref<boolean>(false)

onMounted(() => {
    window.addEventListener('scroll', handleScroll);

})

function executeScroll() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
function handleScroll() {
    if (window.scrollY > 300) {
        display.value = true;
    } else {
        display.value = false;
    }
}
</script> 