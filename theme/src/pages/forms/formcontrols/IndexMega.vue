<template>
    <Breadcrumbs main="Form Controls" mains="Mega Options" title="Mega Options" />
    <div class="container-fluid mega-option">
        <div class="row">
            <VariationRadio />
            <VariationCheckbox />
            <DefultStyle />
            <BorderStyle />
            <DashedStyle />
            <OfferBorder />
            <InlineStyle />
            <VerticalStyle />
            <HorizontalStyle />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const VariationRadio = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/magaoption/VariationRadio.vue"))
const VariationCheckbox = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/magaoption/VariationCheckbox.vue"))
const DefultStyle = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/magaoption/DefultStyle.vue"))
const BorderStyle = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/magaoption/BorderStyle.vue"))
const DashedStyle = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/magaoption/DashedStyle.vue"))
const OfferBorder = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/magaoption/OfferBorder.vue"))
const InlineStyle = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/magaoption/InlineStyle.vue"))
const VerticalStyle = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/magaoption/VerticalStyle.vue"))
const HorizontalStyle = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/magaoption/HorizontalStyle.vue"))
</script>