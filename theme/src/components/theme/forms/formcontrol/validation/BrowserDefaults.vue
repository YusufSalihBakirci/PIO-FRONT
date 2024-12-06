<template>
    <Card3 colClass="col-xl-6 mb-lg-3" pre="true" cardBodyClass="custom-input form-validation"
        cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true" title="Browser defaults"
        desc="Not interested in custom validation feedback messages or writing JavaScript to change form behaviors?">
        <form class="row g-3">
            <div class="col-12">
                <label class="form-label" for="first-name">First name</label>
                <input class="form-control" id="first-name" type="text" placeholder="First name" aria-label="First name"
                    required>
            </div>
            <div class="col-12">
                <label class="form-label" for="exampleFormControlInput1">Email address</label>
                <input class="form-control" id="exampleFormControlInput1" type="email" placeholder="pesamof475@saeoil.com"
                    required>
            </div>
            <div class="col-12">
                <label class="col-sm-12 col-form-label" for="inputPassword2">Password</label>
                <input class="form-control" id="inputPassword2" type="password" required>
            </div>
            <div class="col-12">
                <label class="form-label" for="validationDefault04">State</label>
                <select class="form-select" id="validationDefault04" required>
                    <option selected disabled value>Choose...</option>
                    <option>U.K </option>
                    <option>Thailand</option>
                    <option>India</option>
                    <option>U.S</option>
                </select>
            </div>
            <div class="col-12">
                <label class="form-label" for="formFile">Choose file</label>
                <input class="form-control" id="formFile" type="file" required>
            </div>
            <div class="col-12">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Select your payment method</h6>
                    <div class="radio-form">
                        <div class="form-check">
                            <input class="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault"
                                required>
                            <label class="form-check-label" for="flexRadioDefault1">Visa</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault"
                                checked required>
                            <label class="form-check-label" for="flexRadioDefault2">MasterCard</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" id="flexRadioDefault3" type="radio" name="flexRadioDefault"
                                checked required>
                            <label class="form-check-label" for="flexRadioDefault3">Paypal</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <label class="form-label" for="exampleFormControlTextarea1">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-12 checkbox-checked">
                <input class="form-check-input" id="flexCheckDefault" type="checkbox" value>
                <label class="form-check-label" for="flexCheckDefault">I agree to the policies</label>
            </div>
            <div class="col-12 mt-2">
                <div class="form-check form-switch">
                    <input class="form-check-input" id="flexSwitchCheckDefault" type="checkbox" role="switch" required>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Are you sure above information are
                        true</label>
                </div>
            </div>
            <div class="col-1 mt-2">
                <button class="btn btn-primary" type="submit">Submit </button>
            </div>
        </form>
</Card3></template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>