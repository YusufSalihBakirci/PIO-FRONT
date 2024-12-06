<template>
    <div class="tab-pane fade show active" :id="element ? 'business-n-info' : 'wizard-n-info'" role="tabpanel"
        aria-labelledby="wizard-n-info-tab">
        <form class="row g-3 needs-validation" novalidate>
            <div class="col-12">
                <h5 class="f-w-700">Select the type of account</h5>
                <p>It has long been known that distracting information on a page will lose a reader's attention.</p>
            </div>
            <div class="col-12">
                <div class="form-check radio ps-0 select-account">
                    <ul class="radio-wrapper">
                        <li>
                            <input class="form-check-input" id="radioOptionWizard1" type="radio" name="radio2"
                                value="option2">
                            <label class="form-check-label mb-0" for="radioOptionWizard1"><i
                                    class="fa-solid fa-building-columns"></i><span class="d-flex flex-column"><span>Business
                                    </span><span>Search your business information please check it</span></span></label>
                        </li>
                        <li>
                            <input class="form-check-input" id="radioOptionWizard2" type="radio" name="radio2"
                                value="option2" checked>
                            <label class="form-check-label mb-0" for="radioOptionWizard2"><i
                                    class="fa-solid fa-user"></i><span class="d-flex flex-column"><span>Personal
                                    </span><span>Search your personal information
                                        please check it</span></span></label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-primary">Continue</button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
let props = defineProps({
    element: String,
})
</script>