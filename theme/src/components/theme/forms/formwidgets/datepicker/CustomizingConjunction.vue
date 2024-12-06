<template>
    <div class="row">
        <label class="col-xxl-3 box-col-12 text-start">Customizing Conjunction</label>
        <div class="col-xxl-9 ">
            <div class="input-group flatpicker-calender">
                <datepicker class="" v-model="date" multiDates />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let date = ref<Date | null>(null);

</script>