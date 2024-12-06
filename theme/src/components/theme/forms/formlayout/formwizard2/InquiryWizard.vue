<template>
    <div class="tab-pane fade" :id="element ? 'inquiry-v-wizard' : 'inquiry-wizard'" role="tabpanel"
        aria-labelledby="inquiry-wizard-tab">
        <form class="row g-3 needs-validation" novalidate>
            <div class="col-12 inquiries-form">
                <div class="row">
                    <div class="col-md-6">
                        <p class="f-w-500">Select the option how you want to receive important notifications.</p>
                        <div class="choose-option">
                            <div class="form-check radio radio-primary" v-for="(item, index) in inquiry" :key="index">
                                <input class="form-check-input me-2" :id="item.id" type="radio" name="inlineRadioOptions"
                                    value="option1">
                                <label class="form-check-label" :for="item.id">{{ item.label }}</label>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row g-3">
                            <div class="col-12">
                                <label class="form-label">Email<span class="txt-danger">*</span></label>
                                <input class="form-control" type="text" placeholder="org@support.com" required>
                            </div>
                            <div class="col-12">
                                <label class="form-label" for="customContact2">Contact Number</label>
                                <input class="form-control" id="customContact2" type="number" placeholder="Enter number"
                                    required>
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <label class="form-label f-w-500" for="FormControlTextarea2">If no, could you please describe?</label>
                <textarea class="form-control" id="FormControlTextarea2" rows="3"></textarea>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-primary me-1">Previous</button>
                <button class="btn btn-primary">Continue </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { inquiry } from "@/core/data/forms"
import { defineProps } from 'vue'
let props = defineProps({
    element: String,
})
</script>