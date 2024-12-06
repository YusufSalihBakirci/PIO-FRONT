<template>
    <div class="mb-3 p-2 rounded-3 b-t-primary border-3">
        <div class="sidebar-icon mb-2">
            <h4>Sidebar icon:</h4>
            <p>Choose between 2 different sidebar icon.</p>
        </div>
        <div class="sidebar-body form-check radio ps-0">
            <ul class="radio-wrapper">
                <li class="default-svg" @click="customSvg('stroke-svg')"><input class="form-check-input" id="radio-icon5"
                        type="radio" name="radio2" value="option2" checked><label class="form-check-label"
                        for="radio-icon5"><svg class="stroke-icon">
                            <use href="@/assets/svg/icon-sprite.svg#stroke-icons"></use>
                        </svg><span>Stroke</span></label></li>
                <li class="colorfull-svg" @click="customSvg('iconcolor-sidebar')"><input class="form-check-input"
                        id="radio-icon6" type="radio" name="radio2" value="option2"><label class="form-check-label"
                        for="radio-icon6"><svg class="stroke-icon">
                            <use href="@/assets/svg/icon-sprite.svg#stroke-icons"></use>
                        </svg><span>Colorfull icon</span></label></li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { uselayoutStore } from "@/store/layout";
const svg = ref<string>('stroke-svg')
let storeLayout = uselayoutStore();

function customSvg(val: string) {
    svg.value = val
    storeLayout.setSvg(val)
}
</script>