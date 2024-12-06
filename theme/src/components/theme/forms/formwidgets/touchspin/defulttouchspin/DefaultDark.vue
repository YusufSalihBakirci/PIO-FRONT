<template>
    <div class="touchspin-wrapper">
        <button class="decrement-touchspin btn-touchspin touchspin-dark" @click="darkDecrement()"><i
                class="fa-solid fa-minus">
            </i></button>
        <input class="input-touchspin  mx-1 spin-outline-dark" type="number" v-model="conter">
        <button class="increment-touchspin btn-touchspin touchspin-dark" @click="darkIncrement()"><i
                class="fa-solid fa-plus">
            </i></button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let conter = ref<number>(4)
function darkIncrement() {
    conter.value++
}
function darkDecrement() {
    if (conter.value > 0) {
        conter.value--
    }
}
</script>