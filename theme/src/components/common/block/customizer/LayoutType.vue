<template>
    <div class="mb-3 p-2 rounded-3 b-t-primary border-3">
        <div class="theme-layout mb-2">
            <h4>Layout type:</h4>
            <p>Choose between 3 different layout types.</p>
        </div>
        <div class="radio-form checkbox-checked">
            <div class="form-check ltr-setting" @click="customizeLayoutType('ltr')"><input class="form-check-input"
                    id="flexRadioDefault1" type="radio" name="flexRadioDefault" checked><label class="form-check-label"
                    for="flexRadioDefault1">LTR</label>
            </div>
            <div class="form-check rtl-setting" @click="customizeLayoutType('rtl')"><input class="form-check-input"
                    id="flexRadioDefault2" type="radio" name="flexRadioDefault"><label class="form-check-label"
                    for="flexRadioDefault2">RTL</label></div>
            <div class="form-check box-setting" @click="customizeLayoutType('box-layout')"><input class="form-check-input"
                    id="flexRadioDefault3" type="radio" name="flexRadioDefault"><label class="form-check-label"
                    for="flexRadioDefault3">Box</label></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { uselayoutStore } from "@/store/layout";
let layoutType = ref<string>("ltr");
let storeLayout = uselayoutStore();
let layout = storeLayout.layouts;
function customizeLayoutType(val: string) {
    layoutType.value = val;
    storeLayout.setLayoutType(layout, val);
}
</script>