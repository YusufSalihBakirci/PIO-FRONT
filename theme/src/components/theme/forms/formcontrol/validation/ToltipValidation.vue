<template>
    <Card3 colClass="col-sm-12" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Tooltip form validation"
        desc="If your form layout allows it, you can swap the <code>.{valid|invalid}</code>-feedback classes for">
        <form class="row g-3 needs-validation custom-input tooltip-valid validation-forms" novalidate
            @submit.prevent="onCustomStyleSubmit">
            <div class="col-md-4 position-relative">
                <label class="form-label" for="validationTooltip01">First name</label>
                <input type="text" class="form-control"
                    v-bind:class="formSubmitted ? inputs.firstname.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                    id="name" placeholder="Your name" v-model="inputs.firstname.data">
                <div class="invalid-tooltip" v-if="inputs.firstname.errorMessage.length">{{
                    inputs.firstname.errorMessage
                }}</div>
                <div class="valid-tooltip" v-else>Looks Good!</div>
            </div>
            <div class="col-md-4 position-relative">
                <label class="form-label" for="validationTooltip02">Last name</label>
                <input class="form-control" type="text"
                    v-bind:class="formSubmitted ? inputs.lastname.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                    id="name1" placeholder="Your name" v-model="inputs.lastname.data">
                <div class="invalid-tooltip" v-if="inputs.lastname.errorMessage.length">{{
                    inputs.lastname.errorMessage
                }}</div>
                <div class="valid-tooltip" v-else>Looks Good!</div>
            </div>

            <div class="col-md-4 position-relative">
                <label class="form-label" for="validationTooltipUsername">Username</label>
                <div class="input-group has-validation"><span class="input-group-text"
                        id="validationTooltipUsernamePrepend">@</span>
                    <input class="form-control" id="validationTooltipUsername" type="text"
                        aria-describedby="validationTooltipUsernamePrepend"
                        v-bind:class="formSubmitted ? inputs.username.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                        placeholder="Username" v-model="inputs.username.data">
                    <div class="invalid-tooltip" v-if="inputs.username.errorMessage.length">{{
                        inputs.username.errorMessage
                    }}</div>
                    <div class="valid-tooltip" v-else>Looks Good!</div>
                </div>
            </div>
            <div class="col-md-6 position-relative">
                <label class="form-label" for="validationTooltip03">City</label>
                <input class="form-control" id="validationCustom03" type="text"
                    v-bind:class="formSubmitted ? inputs.city.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                    placeholder="City" required v-model="inputs.city.data">
                <div class="invalid-tooltip" v-if="inputs.city.errorMessage.length">{{ inputs.city.errorMessage }}
                </div>
                <div class="valid-tooltip" v-else>Looks Good!</div>
            </div>
            <div class="col-md-3 position-relative">
                <label class="form-label" for="validationTooltip04">State</label>
                <select class="form-select" id="validationCustom04"
                    v-bind:class="formSubmitted ? inputs.state.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                    v-model="inputs.state.data" required>
                    <option selected disabled value="">Choose...</option>
                    <option v-for="(value, index) in optionValues" :value="value" :key="value + index">{{ value }}
                    </option>
                </select>
                <div class="invalid-tooltip" v-if="inputs.state.errorMessage.length">{{ inputs.state.errorMessage }}
                </div>
                <div class="valid-tooltip" v-else>Looks Good!</div>
            </div>
            <div class="col-md-3 position-relative">
                <label class="form-label" for="validationTooltip05">Zip</label>
                <input class="form-control" id="validationCustom05" type="text"
                    v-bind:class="formSubmitted ? inputs.zip.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                    v-model="inputs.zip.data" placeholder="Zip" required>
                <div class="invalid-tooltip" v-if="inputs.zip.errorMessage.length">{{ inputs.zip.errorMessage }}
                </div>
                <div class="valid-tooltip" v-else>Looks Good!</div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { onCustomStyleSubmit, inputs, formSubmitted, optionValues } from "@/composables/common/validationForm"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>