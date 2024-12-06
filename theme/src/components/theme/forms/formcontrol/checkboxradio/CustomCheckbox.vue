<template>
    <Card3 colClass="col-12" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Custom checkbox"
        desc="Use the <code>.form-check-input  </code>and <code>.form-check-label  </code>for checkbox. And filled checkbox used">
        <div class="row g-3">
            <div class="col-xl-4 col-sm-6">
                <div class="card-wrapper border rounded-3 h-100 checkbox-checked custom-checkbox">
                    <h6 class="sub-title">Bordered Checkbox </h6>
                    <div class="form-check checkbox  mb-0" :class="item.class" v-for="(item, index) in borderedcheckbox"
                        :key="index">
                        <input class="form-check-input" :class="item.inputclass" :id="item.ids" type="checkbox">
                        <label class="form-check-label" :for="item.ids">{{ item.title }}</label>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-sm-12 order-xl-0 order-sm-1">
                <div class="card-wrapper border rounded-3 h-100">
                    <h6 class="sub-title">Icon Checkbox </h6>
                    <div class="form-check checkbox checkbox-primary ps-0 main-icon-checkbox">
                        <ul class="checkbox-wrapper">
                            <li v-for="(item, index) in iconcheckbox" :key="index">
                                <input class="form-check-input checkbox-shadow" :id="item.ids" type="checkbox">
                                <label class="form-check-label" for="checkbox-icon"><i :class="item.icon"></i><span>{{
                                    item.title }}</span></label>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-6">
                <div class="card-wrapper border rounded-3 h-100 checkbox-checked filled-checkbox">
                    <h6 class="sub-title">Filled Checkbox </h6>
                    <div class="form-check checkbox " :class="item.class" v-for="(item, index) in filledCheckbox"
                        :key="index">
                        <input class="form-check-input" :id="item.ids" type="checkbox">
                        <label class="form-check-label" :for="item.ids">{{ item.title }}</label>
                    </div>

                </div>
            </div>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { borderedcheckbox, iconcheckbox, filledCheckbox } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>