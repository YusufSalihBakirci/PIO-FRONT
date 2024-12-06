<template>
    <Breadcrumbs main="Animation" mains="Animate" title="Animate" />
    <div class="container-fluid">
        <div class="row">
            <AnimateBox />
            <AnimateOption />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const AnimateBox = defineAsyncComponent(() => import("@/components/theme/animation/animate/AnimateBox.vue"))
const AnimateOption = defineAsyncComponent(() => import("@/components/theme/animation/animate/AnimateOption.vue"))
</script>