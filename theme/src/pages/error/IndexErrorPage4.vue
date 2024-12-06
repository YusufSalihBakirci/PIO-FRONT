<template>
    <div class="error-wrapper">
        <div class="container">
            <ErrorPageFour />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ErrorPageFour = defineAsyncComponent(() => import("@/components/theme/error/ErrorPageFour.vue"))
</script>