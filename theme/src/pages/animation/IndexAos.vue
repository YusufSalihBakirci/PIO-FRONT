<template>
    <Breadcrumbs main="Animation" mains="AOS" title="AOS" />
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <AosExample />
                <InitAOS />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const AosExample = defineAsyncComponent(() => import("@/components/theme/animation/aos/AosExample.vue"))
const InitAOS = defineAsyncComponent(() => import("@/components/theme/animation/aos/InitAOS.vue"))
</script>