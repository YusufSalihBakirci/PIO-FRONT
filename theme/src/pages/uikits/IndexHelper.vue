<template>
    <Breadcrumbs main="Ui Kits" mains="Helper classes" title="Helper classes" />
    <div class="container-fluid">
        <div class="row">
            <HelperBorders />
            <HelperDisplays />
            <BackgroundColors />
            <BorderColor />
            <ImagesSizes />
            <FontStyle />
            <TextColors />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const HelperBorders = defineAsyncComponent(() => import("@/components/theme/uikits/helper/HelperBorders.vue"))
const HelperDisplays = defineAsyncComponent(() => import("@/components/theme/uikits/helper/HelperDisplays.vue"))
const BackgroundColors = defineAsyncComponent(() => import("@/components/theme/uikits/helper/BackgroundColors.vue"))
const BorderColor = defineAsyncComponent(() => import("@/components/theme/uikits/helper/BorderColor.vue"))
const ImagesSizes = defineAsyncComponent(() => import("@/components/theme/uikits/helper/ImagesSizes.vue"))
const FontStyle = defineAsyncComponent(() => import("@/components/theme/uikits/helper/FontStyle.vue"))
const TextColors = defineAsyncComponent(() => import("@/components/theme/uikits/helper/TextColors.vue"))
</script>