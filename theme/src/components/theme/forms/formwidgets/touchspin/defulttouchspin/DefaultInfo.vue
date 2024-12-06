<template>
    <div class="touchspin-wrapper">
        <button class="decrement-touchspin btn-touchspin touchspin-info" @click="infoDecrement()"><i
                class="fa-solid fa-minus"></i></button>
        <input class="input-touchspin  mx-1 spin-outline-info" type="number" v-model="conter">
        <button class="increment-touchspin btn-touchspin touchspin-info" @click="infoIncrement()"><i
                class="fa-solid fa-plus">
            </i></button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let conter = ref<number>(9)
function infoIncrement() {
    conter.value++
}
function infoDecrement() {
    if (conter.value > 0) {
        conter.value--
    }
}
</script>