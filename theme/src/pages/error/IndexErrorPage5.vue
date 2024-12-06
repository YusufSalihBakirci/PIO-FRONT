<template>
    <div class="error-wrapper">
        <div class="container">
            <ErrorPageFive />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ErrorPageFive = defineAsyncComponent(() => import("@/components/theme/error/ErrorPageFive.vue"))
</script>