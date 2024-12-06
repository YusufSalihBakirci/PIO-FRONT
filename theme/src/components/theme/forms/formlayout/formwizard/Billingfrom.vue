<template>
    <div class="tab-pane fade show active" id="bill-wizard" role="tabpanel" aria-labelledby="bill-wizard-tab">
        <h5 class="f-w-600">Billing Information </h5>
        <p>Fill up the following information </p>
        <form class="row g-3 needs-validation" novalidate>
            <div class="col-sm-6" v-for="(item, index) in billing" :key="index">
                <label class="form-label" :for="item.id">{{ item.label }}<span v-if="item.text"
                        class="text-danger">*</span></label>
                <input class="form-control" :id="item.id" :type="item.type" :placeholder="item.placeholer" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-12">
                <label class="form-label" for="exampleFormControlTextarea33">Address </label>
                <textarea class="form-control" id="exampleFormControlTextarea33" rows="3"></textarea>
            </div>
            <div class="col-sm-4">
                <label class="form-label" for="customState-wizard">Country</label>
                <select class="form-select" id="customState-wizard" required>
                    <option selected disabled value>Select Country</option>
                    <option v-for="(item, index) in country" :key="index">{{ item }} </option>

                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
            </div>
            <div class="col-sm-4">
                <label class="form-label" for="customstate">State</label>
                <input class="form-control" id="customstate" type="text" placeholder="Enter state" required>
            </div>
            <div class="col-sm-4">
                <label class="form-label" for="custom-zipcode">Zip Code</label>
                <input class="form-control" id="custom-zipcode" type="text" required>
                <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" id="invalid-check-wizard" type="checkbox" value required>
                    <label class="form-check-label mb-0 d-block" for="invalid-check-wizard">Remember me for next
                        time</label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
            </div>
            <div class="col-12">
                <label class="form-label" for="exampleFormControlTextarea-01">Other Notes</label>
                <textarea class="form-control" id="exampleFormControlTextarea-01" rows="3"
                    placeholder="Enter your queries..."></textarea>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-primary">Proceed to Next<i class="fa fa-truck proceed-next pe-2"></i></button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { billing } from "@/core/data/forms"
let country = ref<string[]>(["Africa", "India", "Indonesia", "Netherlands", "U.K", "U.S"])
</script>