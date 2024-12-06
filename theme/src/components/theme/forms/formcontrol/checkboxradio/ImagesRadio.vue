<template>
    <Card3 colClass="col-12" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Images with radio"
        desc="Use the<code>.form-check-input </code>and <code>.form-check-label </code>for image radio.">
        <div class="main-img-checkbox">
            <div class="row g-3">
                <div class="col-xxl-3 col-sm-6">
                    <div class="card-wrapper border rounded-3 checkbox-checked">
                        <h6 class="sub-title">Custom</h6>
                        <div class="img-checkbox">
                            <input class="main-img-cover form-check-input" id="img-radio-1" type="radio" name="radio6">
                            <label class="form-check-label mb-0" for="img-radio-1"> <img src="@/assets/images/switch/5.jpg"
                                    alt="coffee-beans"></label>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-sm-6">
                    <div class="card-wrapper border rounded-3 checkbox-checked">
                        <h6 class="sub-title">Checked Image</h6>
                        <div class="img-checkbox">
                            <input class="main-img-cover form-check-input" id="img-radio-2" type="radio" name="radio6"
                                checked>
                            <label class="form-check-label mb-0" for="img-radio-2"> <img src="@/assets/images/switch/6.jpg"
                                    alt="tree"></label>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-sm-6">
                    <div class="card-wrapper border rounded-3 checkbox-checked">
                        <h6 class="sub-title">Disable Image</h6>
                        <div class="img-checkbox">
                            <input class="main-img-cover form-check-input" id="img-radio-3" type="radio" name="radio6"
                                disabled>
                            <label class="form-check-label mb-0" for="img-radio-3"> <img src="@/assets/images/switch/7.jpg"
                                    alt="flowers"></label>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-sm-6">
                    <div class="card-wrapper border rounded-3 checkbox-checked">
                        <h6 class="sub-title">Disable Checked Image</h6>
                        <div class="img-checkbox">
                            <input class="main-img-cover form-check-input" id="img-radio-4" type="radio" name="radio6"
                                disabled checked>
                            <label class="form-check-label mb-0" for="img-radio-4"><img src="@/assets/images/switch/8.jpg"
                                    alt="rose-tea"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</Card3></template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>