<template>
    <div class="row">
        <label class="col-xxl-3 box-col-12 text-start">Date With Time</label>
        <div class="col-xxl-9 box-col-12">
            <div class="input-group flatpicker-calender">
                <Datepicker class="" v-model="date" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let date = ref<Date | null>(null);
</script>