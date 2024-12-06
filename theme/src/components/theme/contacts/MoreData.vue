<template>
    <div class="mt-0 mb-3 col-md-12">
        <div class="row">
            <div class="col-lg-2 col-sm-4">
                <select class="form-control" id="birth_day">
                    <option class="f-w-600">Day</option>
                    <option v-for="(item, index) in day" :key="index">{{ item.value }}</option>
                </select>
            </div>
            <div class="col-lg-3 col-sm-4">
                <select class="form-control" id="birth_month">
                    <option class="f-w-600">Month</option>
                    <option v-for="(item, index) in month" :key="index">{{ item.month }}</option>
                </select>
            </div>
            <div class="col-lg-3 col-sm-4">
                <input class="form-control" id="birth_year" type="text">
            </div>
        </div>
    </div>
    <div class="mt-0 mb-3 col-md-12">
        <div class="row g-3">
            <div class="col-sm-6">
                <label>Personality</label>
                <input class="form-control" id="personality" type="text" required autocomplete="off">
            </div>
            <div class="col-sm-6">
                <label>Interest</label>
                <input class="form-control" id="interest" type="text" required autocomplete="off">
            </div>
        </div>
    </div>
    <div class="mb-3 col-md-12">
        <label>Home Address</label>
        <div class="row g-3">
            <div class="col-12">
                <div class="mb-2">
                    <input class="form-control" type="text" placeholder="Address">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="mb-2">
                    <input class="form-control" id="city" type="text" placeholder="City">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="mb-2">
                    <input class="form-control" type="text" placeholder="State">
                </div>
            </div>
            <div class="col-sm-6">
                <div>
                    <input class="form-control" type="text" placeholder="Country">
                </div>
            </div>
            <div class="col-sm-6">
                <div>
                    <input class="form-control" type="text" placeholder="Pin Code">
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { day, month } from "@/core/data/contact"

</script>