<template>
    <Card3 colClass="col-xl-12" cardbodyClass="common-flex rounded-touchspin" cardhaderClass=" card-no-border pb-0"
        pre="true" preClass="mt-1 mb-0" headerTitle="true" title="Rounded touchspin"
        desc="Use the   <code>.decrement-touchspin  </code>and   <code>.increment-touchspin   </code>class.">
        <RoundedPrimary />
        <RoundedSecondary />
        <RoundedSuccess />
        <RoundedDanger />
        <RoundedWarning />
        <RoundedInfo />
        <RoundedDark />
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const RoundedPrimary = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/roundedtouchspin/RoundedPrimary.vue"))
const RoundedSecondary = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/roundedtouchspin/RoundedSecondary.vue"))
const RoundedSuccess = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/roundedtouchspin/RoundedSuccess.vue"))
const RoundedDanger = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/roundedtouchspin/RoundedDanger.vue"))
const RoundedWarning = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/roundedtouchspin/RoundedWarning.vue"))
const RoundedInfo = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/roundedtouchspin/RoundedInfo.vue"))
const RoundedDark = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/roundedtouchspin/RoundedDark.vue"))
</script>