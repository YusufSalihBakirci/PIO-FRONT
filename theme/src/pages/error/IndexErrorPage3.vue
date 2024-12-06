<template>
    <div class="error-wrapper">
        <div class="container">
            <ErrorPageThree />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ErrorPageThree = defineAsyncComponent(() => import("@/components/theme/error/ErrorPageThree.vue"))
</script>