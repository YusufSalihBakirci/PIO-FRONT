<template>
    <Card3 colClass="col-12" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Default checkbox " desc="Use the <code>.form-check-input </code>and">
        <div class="row g-3">
            <div class="col-sm-6 col-xl-4">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Default Checks </h6>
                    <div class="form-check">
                        <input class="form-check-input primary" id="flexCheckDefault" type="checkbox" value="">
                        <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input primary" id="flexCheckChecked" type="checkbox" value=""
                            checked="true">
                        <label class="form-check-label" for="flexCheckChecked">Checked checkbox</label>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Disabled Checks</h6>
                    <div class="form-check">
                        <input class="form-check-input primary" id="flexCheckDisabled" type="checkbox" value=""
                            disabled="true">
                        <label class="form-check-label" for="flexCheckDisabled">Disabled checkbox</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input primary" id="flexCheckCheckedDisabled" type="checkbox" value=""
                            checked="true" disabled="true">
                        <label class="form-check-label" for="flexCheckCheckedDisabled">Disabled checked checkbox</label>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Right Checks </h6>
                    <div class="form-check form-check-reverse">
                        <input class="form-check-input primary" id="reverseCheck1" type="checkbox" value="">
                        <label class="form-check-label" for="reverseCheck1">Reverse checkbox</label>
                    </div>
                    <div class="form-check form-check-reverse">
                        <input class="form-check-input primary" id="reverseCheck2" type="checkbox" value="" disabled="true"
                            checked="true">
                        <label class="form-check-label" for="reverseCheck2">Disabled reverse checkbox</label>
                    </div>
                </div>
            </div>
            <div class="col-xl-12 col-sm-6">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Indeterminate </h6>
                    <div class="form-check">
                        <input class="form-check-input primary" id="flexCheckIndeterminate" type="checkbox" value="">
                        <label class="form-check-label" for="flexCheckIndeterminate">Indeterminate checkbox</label>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>