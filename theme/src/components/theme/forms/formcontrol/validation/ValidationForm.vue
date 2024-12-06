<template>
    <Card3 colClass="col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Validation form"
        desc="Custom feedback styles apply custom colors, borders and background icons to better communicate feedback.">
        <form class="row g-3 needs-validation custom-input validation-forms" novalidate @submit.prevent="onCustomSubmit()">
            <div class="col-12">
                <label class="form-label" for="validationCustom01">First name</label>
                <input type="text" class="form-control"
                    v-bind:class="Submitted ? inputss.firstname.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                    id="name1" placeholder="Your name" v-model="inputss.firstname.data">
                <div class="invalid-feedback" v-if="inputss.firstname.errorMessage.length">{{
                    inputss.firstname.errorMessage
                }}</div>
                <div class="valid-feedback" v-else>Looks Good!</div>
            </div>
            <div class="col-12">
                <label class="col-sm-12 col-form-label" for="inputPassword1">Password</label>
                <input class="form-control" id="inputPassword1" type="password" v-model="inputss.password.data"
                    v-bind:class="Submitted ? inputss.password.errorMessage.length ? 'is-invalid' : 'is-valid' : ''">
                <div class="invalid-feedback" v-if="inputss.password.errorMessage.length">{{
                    inputss.password.errorMessage
                }}</div>
                <div class="valid-feedback" v-else>Looks Good!</div>
            </div>
            <div class="col-12">
                <label class="form-label" for="validationCustom04">State</label>
                <select class="form-select" id="validationCustom04"
                    v-bind:class="Submitted ? inputss.state.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                    v-model="inputss.state.data" required>
                    <option selected disabled value="">Choose...</option>
                    <option v-for="(value, index) in optionValues" :value="value" :key="value + index">{{
                        value
                    }}
                    </option>
                </select>
                <div class="invalid-feedback" v-if="inputss.state.errorMessage.length">{{
                    inputss.state.errorMessage
                }}</div>
                <div class="valid-feedback" v-else>Looks Good!</div>
            </div>
            <div class="col-md-6">
                <label class="form-label" for="validationCustom03">City</label>
                <input class="form-control" id="validationCustom03" type="text"
                    v-bind:class="Submitted ? inputss.city.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                    placeholder="City" required v-model="inputss.city.data">
                <div class="invalid-feedback" v-if="inputss.city.errorMessage.length">{{
                    inputss.city.errorMessage
                }}</div>
                <div class="valid-feedback" v-else>Looks Good!</div>
            </div>
            <div class="col-md-6">
                <label class="form-label" for="validationCustom05">Zip</label>
                <input class="form-control" id="validationCustom05" type="text"
                    v-bind:class="Submitted ? inputss.zip.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                    v-model="inputss.zip.data" placeholder="Zip" required>
                <div class="invalid-feedback" v-if="inputss.zip.errorMessage.length">{{
                    inputss.zip.errorMessage
                }}</div>
                <div class="valid-feedback" v-else>Looks Good!</div>
            </div>
            <div class="col-12">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Select your payment method</h6>
                    <div class="radio-form">
                        <div class="form-check">
                            <input class="form-check-input" id="validationFormCheck25" type="radio" name="radio-stacked"
                                required>
                            <label class="form-check-label" for="validationFormCheck25">MaterCard</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" id="validationFormCheck23" type="radio" name="radio-stacked"
                                required>
                            <label class="form-check-label" for="validationFormCheck23">VISA</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <select class="form-select" required aria-label="select example"
                    v-bind:class="Submitted ? inputss.feedback.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                    v-model="inputss.feedback.data">
                    <option selected disabled value="">Select Your Favorite Pixelstrap theme</option>
                    <option v-for="(value, index) in feedbacks" :value="value" :key="value + index">{{
                        value
                    }}
                    </option>

                </select>
                <div class="invalid-feedback" v-if="inputss.feedback.errorMessage.length">{{
                    inputss.feedback.errorMessage
                }}</div>
                <div class="valid-feedback" v-else>Looks Good!</div>
            </div>
            <div class="col-12">
                <label class="form-label" for="formFile1">Choose File</label>
                <input class="form-control" id="formFile1" type="file" aria-label="file example" required>
                <div class="invalid-feedback">Invalid form file selected</div>
            </div>
            <div class="col-12">
                <label class="form-label" for="validationTextarea">Description</label>
                <textarea class="form-control" id="validationTextarea" placeholder="Enter your comment" required></textarea>
                <div class="invalid-feedback">Please enter a message in the textarea.</div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" id="invalidCheck" type="checkbox" value required>
                    <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
import { onCustomSubmit, inputss, optionValues, Submitted, feedbacks } from "@/composables/common/validationForm"
</script>