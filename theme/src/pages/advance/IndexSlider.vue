<template>
    <Breadcrumbs main="Bonus Ui" mains="Slider" title="Slider" />
    <div class="container-fluid">
        <div class="row">
            <SlidesOnly />
            <WithControls />
            <AutoPlay />
            <MouseWheel />
            <WithIndicators />
            <WithCaptions />
            <CrossFade />
            <IndividualCarousel />
            <DisableTouch />
            <DarkVariant />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const SlidesOnly = defineAsyncComponent(() => import("@/components/theme/advance/slider/SlidesOnly.vue"))
const WithControls = defineAsyncComponent(() => import("@/components/theme/advance/slider/WithControls.vue"))
const AutoPlay = defineAsyncComponent(() => import("@/components/theme/advance/slider/AutoPlay.vue"))
const MouseWheel = defineAsyncComponent(() => import("@/components/theme/advance/slider/MouseWheel.vue"))
const WithIndicators = defineAsyncComponent(() => import("@/components/theme/advance/slider/WithIndicators.vue"))
const WithCaptions = defineAsyncComponent(() => import("@/components/theme/advance/slider/WithCaptions.vue"))
const CrossFade = defineAsyncComponent(() => import("@/components/theme/advance/slider/CrossFade.vue"))
const IndividualCarousel = defineAsyncComponent(() => import("@/components/theme/advance/slider/IndividualCarousel.vue"))
const DisableTouch = defineAsyncComponent(() => import("@/components/theme/advance/slider/DisableTouch.vue"))
const DarkVariant = defineAsyncComponent(() => import("@/components/theme/advance/slider/DarkVariant.vue"))
</script>