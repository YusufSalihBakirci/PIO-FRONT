<template>
    <div class="error-wrapper">
        <div class="container">
            <ErrorPageSix />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ErrorPageSix = defineAsyncComponent(() => import("@/components/theme/error/ErrorPageSix.vue"))
</script>