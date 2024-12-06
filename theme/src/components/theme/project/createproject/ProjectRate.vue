<template>
    <div class="row">
        <div class="col-sm-4">
            <div class="mb-3">
                <h5 class="f-w-600 mb-2">Project Rate</h5>
                <input class="form-control" type="text" placeholder="Enter project Rate">
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3">
                <h5 class="f-w-600 mb-2">Project Type</h5>
                <select class="form-select">
                    <option>Hourly</option>
                    <option>Fix price</option>
                </select>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3">
                <h5 class="f-w-600 mb-2">Priority</h5>
                <select class="form-select">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-4">
            <div class="mb-3">
                <h5 class="f-w-600 mb-2">Project Size</h5>
                <select class="form-select">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Big</option>
                </select>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3">
                <h5 class="f-w-600 mb-2">Starting date</h5>

                <datepicker class="datepicker-here form-control" v-model="date" :format="format" />
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3">
                <h5 class="f-w-600 mb-2">Ending date</h5>
                <datepicker class="datepicker-here form-control" v-model="date1" :format="format" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let date = ref<Date | null>(null);
const date1 = ref<Date | null>(null);
const format = (date: Date | null): string => {
    if (date === null) {
        return '';
    }

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return ` ${day}/${month}/${year}`;
};
</script>