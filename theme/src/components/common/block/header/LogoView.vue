<template>
        <div class="logo-wrapper d-flex align-items-center col-auto"><router-link to="/"><img class="light-logo img-fluid"
                                src="@/assets/images/logo/logo1.png" alt="logo" /><img class="dark-logo img-fluid"
                                src="@/assets/images/logo/logo-dark.png" alt="logo" /></router-link><a
                        class="close-btn toggle-sidebar" href="javascript:void(0)">
                        <svg class="svg-color" @click="store.toggle_sidebar">
                                <use href="@/assets/svg/iconly-sprite.svg#Category"></use>
                        </svg></a></div>
</template>
<script lang="ts" setup>
import { useMenuStore } from "@/store/menu";
const store = useMenuStore();
</script>