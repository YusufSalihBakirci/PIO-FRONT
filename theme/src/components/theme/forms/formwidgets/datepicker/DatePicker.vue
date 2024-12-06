<template>
    <Card3 colClass="col-xl-6 mb-lg-3" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Date picker"
        cardbodyClass="main-flatpickr">
        <div class="card-wrapper border rounded-3">
            <form class="timepicker-wrapper">
                <DefultDate />
                <HumanFriendly />
                <MinmaxDate />
                <DisabledDates />
                <MultipleDate />
                <CustomizingConjunction />
                <RangeDate />
                <PreloadingDates />
            </form>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const DefultDate = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/DefultDate.vue"))
const HumanFriendly = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/HumanFriendly.vue"))
const MinmaxDate = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/MinmaxDate.vue"))
const DisabledDates = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/DisabledDates.vue"))
const MultipleDate = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/MultipleDate.vue"))
const CustomizingConjunction = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/CustomizingConjunction.vue"))
const RangeDate = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/RangeDate.vue"))
const PreloadingDates = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/PreloadingDates.vue"))
</script>