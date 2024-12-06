<template>
    <Breadcrumbs main="Bonus Ui" mains="Range Slider" title="Range Slider" />
    <div class="container-fluid">
        <div class="row">
            <DefultRang />
            <MinMax />
            <PrefixRang />
            <NegativeRang />
            <StepsRange />
            <CustomRang />
            <PrettifyRang />
            <ColorRang />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const DefultRang = defineAsyncComponent(() => import("@/components/theme/advance/rangslider/DefultRang.vue"))
const MinMax = defineAsyncComponent(() => import("@/components/theme/advance/rangslider/MinMax.vue"))
const PrefixRang = defineAsyncComponent(() => import("@/components/theme/advance/rangslider/PrefixRang.vue"))
const NegativeRang = defineAsyncComponent(() => import("@/components/theme/advance/rangslider/NegativeRang.vue"))
const StepsRange = defineAsyncComponent(() => import("@/components/theme/advance/rangslider/StepsRange.vue"))
const CustomRang = defineAsyncComponent(() => import("@/components/theme/advance/rangslider/CustomRang.vue"))
const ColorRang = defineAsyncComponent(() => import("@/components/theme/advance/rangslider/ColorRang.vue"))
const PrettifyRang = defineAsyncComponent(() => import("@/components/theme/advance/rangslider/PrettifyRang.vue"))
</script>