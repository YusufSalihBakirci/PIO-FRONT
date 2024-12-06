<template>
    <div class="tab-pane fade show active" :id="element ? 'wizard-v-info' : 'wizard-info'" role="tabpanel"
        aria-labelledby="wizard-info-tab">
        <form class="row g-3 needs-validation basic-form" novalidate>
            <div class="col-xl-4 col-sm-6" v-for="(item, index) in info" :key="index">
                <label class="form-label" :for="item.id">{{ item.label }}<span class="text-danger">*</span></label>
                <input class="form-control" :id="item.id" :type="item.type" :placeholder="item.placeholer" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-xl-5 col-sm-4">
                <label class="form-label" for="customState-wizard">State</label>
                <select class="form-select" id="customState-wizard" required>
                    <option selected disabled value>Choose...</option>
                    <option>USA </option>
                    <option>U.K </option>
                    <option>U.S</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
            </div>
            <div class="col-lg-3 col-md-6">
                <label class="form-label" for="custom-zipcode">Zip Code</label>
                <input class="form-control" id="custom-zipcode" type="text" required>
                <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-lg-4 col-md-6">
                <label class="form-label" for="customContact1">Contact Number</label>
                <input class="form-control" id="customContact1" type="number" placeholder="Enter number" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" id="invalid-check-wizard" type="checkbox" value required>
                    <label class="form-check-label mb-0 d-block" for="invalid-check-wizard">Agree to terms and
                        conditions</label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-primary">Continue</button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { info } from "@/core/data/forms"
import { defineProps } from 'vue'
let props = defineProps({
    element: String,
})
</script>