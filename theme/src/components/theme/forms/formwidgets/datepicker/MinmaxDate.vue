<template>
    <div class="row">
        <label class="col-xxl-3 box-col-12 text-start">Min-Max Value</label>
        <div class="col-xxl-9 ">
            <div class="input-group flatpicker-calender">
                <datepicker class="" v-model="date" :min-date="minDate" :max-date="maxDate" prevent-min-max-navigation />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { addMonths, getMonth, getYear, subMonths } from 'date-fns';

const date = ref(new Date());

const minDate = computed(() => subMonths(new Date(getYear(new Date()), getMonth(new Date())), 2));
const maxDate = computed(() => addMonths(new Date(getYear(new Date()), getMonth(new Date())), 2));
</script>