<template>
    <div class="tab-pane fade" :id="element ? 'bank-v-wizard' : 'bank-wizard'" role="tabpanel"
        aria-labelledby="bank-wizard-tab">
        <form class="row g-3 needs-validation basic-form" novalidate>
            <div class="col-sm-6 bank-search">
                <label class="form-label" for="aadharnumber-wizard">Aadhaar Number<span class="txt-danger">*</span></label>
                <input class="form-control" id="aadharnumber-wizard" type="Search" placeholder="xxxx xxxx xxxx xxxx"
                    required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-sm-6 bank-search">
                <label class="form-label" for="pan-wizard">PAN<span class="txt-danger">*</span></label>
                <input class="form-control" id="pan-wizard" type="Search" placeholder="xxxxxxxxxx" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-12">
                <h6 class="f-w-600">Choose from these popular banks</h6>
                <div class="bank-selection">
                    <div class="form-check radio radio-primary ps-0">
                        <ul class="radio-wrapper">
                            <li v-for="(item, index) in bank" :key="index">
                                <input class="form-check-input" :id="item.id" type="radio" name="radio2" value="option2"
                                    :checked="item.checked">
                                <label class="form-check-label" :for="item.id"><img :src="getImages(item.img)"
                                        alt="HDFC"><span>{{ item.label }}</span></label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-primary me-1">Previous</button>
                <button class="btn btn-primary">Continue</button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { bank } from "@/core/data/forms"
import { getImages } from "@/composables/common/getImages"
import { defineProps } from 'vue'
let props = defineProps({
    element: String,
})
</script>