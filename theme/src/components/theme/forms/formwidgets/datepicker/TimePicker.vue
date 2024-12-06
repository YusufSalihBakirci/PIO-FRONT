<template>
    <Card3 colClass="col-xl-6" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Time picker"
        cardbodyClass="main-flatpickr">
        <div class="card-wrapper border rounded-3">
            <form class="timepicker-wrapper">
                <TimeOnly />
                <HourTimepicker />
                <LimitsTimepicker />
                <PreloadingTime />
                <LimitedTimerange />
                <MainmaxTimepicker />
                <DateTime />
            </form>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const TimeOnly = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/TimeOnly.vue"))
const HourTimepicker = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/HourTimepicker.vue"))
const LimitsTimepicker = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/LimitsTimepicker.vue"))
const PreloadingTime = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/PreloadingTime.vue"))
const LimitedTimerange = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/LimitedTimerange.vue"))
const MainmaxTimepicker = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/MainmaxTimepicker.vue"))
const DateTime = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/DateTime.vue"))
</script>