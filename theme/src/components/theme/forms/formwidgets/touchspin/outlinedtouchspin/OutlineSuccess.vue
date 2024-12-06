<template>
    <div class="touchspin-wrapper">
        <button class="decrement-touchspin btn-touchspin spin-border-success" @click="successDecrement()"><i
                class="fa-solid fa-minus">
            </i></button>
        <input class="input-touchspin  mx-1 spin-outline-success" type="number" v-model="conter">
        <button class="increment-touchspin btn-touchspin spin-border-success" @click="successIncrement()"><i
                class="fa-solid fa-plus">
            </i></button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let conter = ref<number>(1)
function successIncrement() {
    conter.value++
}
function successDecrement() {
    if (conter.value > 0) {
        conter.value--
    }
}
</script>