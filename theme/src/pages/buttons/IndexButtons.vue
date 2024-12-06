<template>
    <Breadcrumbs main="Buttons" mains="Buttons" title="Buttons" />
    <div class="container-fluid">
        <div class="row g-3">
            <ButtonsData />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ButtonsData = defineAsyncComponent(() => import("@/components/theme/buttons/ButtonsData.vue"))
</script>