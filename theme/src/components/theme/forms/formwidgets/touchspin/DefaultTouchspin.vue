<template>
    <Card3 colClass="col-xl-6" cardbodyClass="common-flex" pre="true" cardhaderClass="card-no-border pb-0"
        preClass="mt-1 mb-0" headerTitle="true" title="Default touchspin"
        desc="Use the  <code>.decrement-touchspin  </code>and  <code>.increment-touchspin </code>class.">
        <DefaultPrimery />
        <DefaultSecondary />
        <DefaultSuccess />
        <DefaultDanger />
        <DefaultWarning />
        <DefaultInfo />
        <DefaultDark />
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const DefaultPrimery = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/defulttouchspin/DefaultPrimery.vue"))
const DefaultSecondary = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/defulttouchspin/DefaultSecondary.vue"))
const DefaultSuccess = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/defulttouchspin/DefaultSuccess.vue"))
const DefaultDanger = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/defulttouchspin/DefaultDanger.vue"))
const DefaultWarning = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/defulttouchspin/DefaultWarning.vue"))
const DefaultInfo = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/defulttouchspin/DefaultInfo.vue"))
const DefaultDark = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/defulttouchspin/DefaultDark.vue"))
</script>