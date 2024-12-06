<template>
    <a class="full-screen" @click.prevent="toggleFullscreen" href="javascript:void(0)">
        <svg>
            <use href="@/assets/svg/iconly-sprite.svg#scanfull"></use>
        </svg></a>
</template>
<script lang="ts" setup>
import { ref } from "vue";
let fullScreen = ref<boolean>(false)

function toggleFullscreen() {
    if (fullScreen.value) {
        fullScreen.value = false;
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
        fullScreen.value = true;
    }
}

</script>