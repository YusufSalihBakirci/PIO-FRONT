<template>
    <div class="error-wrapper">
        <div class="container">
            <ErrorPageTwo />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ErrorPageTwo = defineAsyncComponent(() => import("@/components/theme/error/ErrorPageTwo.vue"))
</script>