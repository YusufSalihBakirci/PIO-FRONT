<template>
    <div class="error-wrapper">
        <div class="container">
            <ErrorPageOne />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ErrorPageOne = defineAsyncComponent(() => import("@/components/theme/error/ErrorPageOne.vue"))
</script>