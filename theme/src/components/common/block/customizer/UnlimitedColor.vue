<template>
    <div class="customizer-color mb-3 p-2 rounded-3 b-t-primary border-3">
        <div class="color-picker mb-2">
            <h4>Unlimited color:</h4>
        </div>
        <ul class="layout-grid">
            <input class="color-layout" id="ColorPicker1" type="color" v-model="primary" name="Background">
            <input class="color-layout" id="ColorPicker2" type="color" v-model="secondary" name="Background">
            <button type="button" class="color-apply-btn mb-3  btn btn-primary color-apply-btn"
                @click="customizeColor">Apply</button>

        </ul>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { uselayoutStore } from '@/store/layout'
let primary = ref<string | null>('#308e87')
let secondary = ref<string | null>('#f39159')
let storeLayout = uselayoutStore()
function customizeColor() {
    let primarycol = localStorage.getItem('primary_color');
    let secondarycol = localStorage.getItem('secondary_color');
    storeLayout.setColorScheme({ primary: primary.value, secondary: secondary.value });
    primary.value = primarycol
    secondary.value = secondarycol

}
onMounted(() => {
    let primarycol = localStorage.getItem('primary_color');
    let secondarycol = localStorage.getItem('secondary_color');
    primary.value = primarycol ? primarycol : '#308e87'
    secondary.value = secondarycol ? secondarycol : '#f39159'
})
</script>