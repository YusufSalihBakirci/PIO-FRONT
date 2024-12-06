<template>
    <div class="row">
        <label class="col-xxl-3 box-col-12 text-start">Human Friendly </label>
        <div class="col-xxl-9 ">
            <div class="input-group flatpicker-calender">
                <datepicker class="" v-model="month" monthPicker />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
interface Time {
    month: number;
    year: number;
}
const month = ref<Time>({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
});
</script>