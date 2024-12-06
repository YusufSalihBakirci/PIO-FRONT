<template>
    <div class="row">
        <label class="col-xxl-3 box-col-12 text-start">24-hour Time Picker</label>
        <div class="col-xxl-9 box-col-12">
            <div class="input-group">
                <Datepicker class="" v-model="time" timePicker :is-24="true" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
interface Time {
    hours: number;
    minutes: number;
}
const time = ref<Time>({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
});
</script>               