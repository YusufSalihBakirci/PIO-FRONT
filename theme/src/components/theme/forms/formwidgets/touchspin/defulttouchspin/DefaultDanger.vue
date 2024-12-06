<template>
    <div class="touchspin-wrapper">
        <button class="decrement-touchspin btn-touchspin touchspin-danger" @click="dangerDecrement()"><i
                class="fa-solid fa-minus"> </i></button>
        <input class="input-touchspin  mx-1 spin-outline-danger" type="number" v-model="conter">
        <button class="increment-touchspin btn-touchspin touchspin-danger" @click="dangerIncrement()"><i
                class="fa-solid fa-plus">
            </i></button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let conter = ref<number>(8)
function dangerIncrement() {
    conter.value++
}
function dangerDecrement() {
    if (conter.value > 0) {
        conter.value--
    }
}
</script>