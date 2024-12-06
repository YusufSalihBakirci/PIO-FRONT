<template>
    <Card3 colClass="col-xl-6" cardbodyClass="common-flex" pre="true" cardhaderClass="card-no-border pb-0"
        preClass="mt-1 mb-0" headerTitle="true" title="Outlined touchspin"
        desc=" Use the  <code>.decrement-touchspin  </code>and   <code>.increment-touchspin  </code>class.">
        <OutlinePrimary />
        <OutlineSecondary />
        <OutlineSuccess />
        <OutlineDanger />
        <OutlineWarning />
        <OutlineInfo />
        <OutlineDark />
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const OutlinePrimary = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/outlinedtouchspin/OutlinePrimary.vue"))
const OutlineSecondary = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/outlinedtouchspin/OutlineSecondary.vue"))
const OutlineSuccess = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/outlinedtouchspin/OutlineSuccess.vue"))
const OutlineDanger = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/outlinedtouchspin/OutlineDanger.vue"))
const OutlineWarning = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/outlinedtouchspin/OutlineWarning.vue"))
const OutlineInfo = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/outlinedtouchspin/OutlineInfo.vue"))
const OutlineDark = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/outlinedtouchspin/OutlineDark.vue"))
</script>