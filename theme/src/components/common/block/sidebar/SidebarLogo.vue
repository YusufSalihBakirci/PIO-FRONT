<template>
    <div class="logo-wrapper d-flex align-items-center"> <router-link to="/"><img src="@/assets/images/logo/logo1.png"
                alt="logo" /></router-link><a class="close-btn sidebar-close" href="javascript:void(0)"
            @click="store.toggle_sidebar">
            <svg class="svg-color svg-white">
                <use href="@/assets/svg/iconly-sprite.svg#Arrow---Left-2"></use>
            </svg></a></div>
</template>
<script lang="ts" setup>
import { useMenuStore } from "@/store/menu";
const store = useMenuStore();
</script>