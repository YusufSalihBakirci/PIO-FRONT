<template>
    <Card3 colClass="col-12" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Inline input-types"
        desc="Group checkboxes or radios on the same horizontal row by adding <code>.form-check-inline</code>to any<code>.form-check</code>.">
        <div class="row g-3">
            <div class="col-md-6 col-xl-4">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Inline Checkbox</h6>
                    <div class="form-check-size rtl-input">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input me-2" id="inlineCheckbox1" type="checkbox" value="option1"
                                checked>
                            <label class="form-check-label" for="inlineCheckbox1">I</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input me-2" id="inlineCheckbox2" type="checkbox" value="option2">
                            <label class="form-check-label" for="inlineCheckbox2">II</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input me-2" id="inlineCheckbox3" type="checkbox" value="option3"
                                disabled>
                            <label class="form-check-label" for="inlineCheckbox3">III (disabled)</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-4">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Inline Radios</h6>
                    <div class="form-check-size rtl-input">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input me-2" id="inlineRadio1" type="radio" name="inlineRadioOptions"
                                value="option1" checked>
                            <label class="form-check-label" for="inlineRadio1">1</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input me-2" id="inlineRadio2" type="radio" name="inlineRadioOptions"
                                value="option2">
                            <label class="form-check-label" for="inlineRadio2">2</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input me-2" id="inlineRadio3" type="radio" name="inlineRadioOptions"
                                value="option3" disabled>
                            <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xl-4">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Inline Switches</h6>
                    <div class="form-check-size">
                        <div class="form-check form-switch form-check-inline">
                            <input class="form-check-input check-size" id="flexSwitchCheckDefault2" type="checkbox"
                                role="switch" checked>
                        </div>
                        <div class="form-check form-switch form-check-inline">
                            <input class="form-check-input check-size" id="flexSwitchCheckDefault3" type="checkbox"
                                role="switch">
                        </div>
                        <div class="form-check form-switch form-check-inline">
                            <input class="form-check-input check-size" id="flexSwitchCheckDisabled3" type="checkbox"
                                role="switch" disabled>
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