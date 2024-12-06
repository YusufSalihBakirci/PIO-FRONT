<template>
    <Breadcrumbs main="Form Controls" mains="Datepicker" title="Datepicker" />
    <div class="container-fluid">
        <div class="row">
            <DefaultCalander />
            <BootstrapCalendar />
            <DatePicker />
            <TimePicker />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const DefaultCalander = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/DefaultCalander.vue"))
const BootstrapCalendar = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/BootstrapCalendar.vue"))
const DatePicker = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/DatePicker.vue"))
const TimePicker = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/datepicker/TimePicker.vue"))
</script>