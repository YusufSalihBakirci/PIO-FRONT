<template>
    <div class="tab-pane fade" :id="element ? 'business-pay-wizard' : 'pay-n-wizard'" role="tabpanel"
        aria-labelledby="pay-n-wizard-tab">
        <form class="row g-3 needs-validation basic-form" novalidate>
            <div class="col-md-6">
                <label class="form-label" for="cardHolder">Card Holder</label>
                <input class="form-control" id="cardHolder" type="text" required>
                <div class="invalid-feedback">Please enter your valid name</div>
                <div class="valid-feedback">
                    Looks's Good!</div>
            </div>
            <div class="col-md-6">
                <label class="form-label" for="cardNumber">Card Number</label>
                <input class="form-control" id="cardNumber" type="text" required placeholder="xxxx xxxx xxxx xxxx">
                <div class="invalid-feedback">Please enter your valid number</div>
                <div class="valid-feedback">
                    Looks's Good!</div>
            </div>
            <div class="col-12">
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="form-label" for="expiration">Expiration(MM/YY)</label>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <input class="form-control" id="expiration" type="number" required placeholder="xx/xx">
                                <div class="invalid-feedback">Please enter your valid number</div>
                                <div class="valid-feedback">
                                    Looks's Good!</div>
                            </div>
                            <div class="col-md-6">
                                <select class="form-select f-w-400 f-14 text-gray" aria-label="Default select example">
                                    <option selected disabled>Year</option>
                                    <option value="1" v-for="(item, index) in year" :key="index">{{ item }}</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label" for="cvvNumber-1">CVV Number</label>
                        <input class="form-control" id="cvvNumber-1" type="text" required>
                        <div class="invalid-feedback">Please enter your valid number</div>
                        <div class="valid-feedback">
                            Looks's Good!</div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-check mb-0">
                    <input class="form-check-input" id="invalidCheckboxWizard" type="checkbox" value required>
                    <label class="form-check-label mb-0" for="invalidCheckboxWizard">Agree to terms and conditions</label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-primary me-1">Previous</button>
                <button class="btn btn-primary">Continue </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { defineProps } from 'vue'
let props = defineProps({
    element: String,
})

let year = ref<string[]>(["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035"])
</script>