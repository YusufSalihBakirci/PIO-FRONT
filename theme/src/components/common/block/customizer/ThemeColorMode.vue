<template>
    <div class="mb-3 p-2 rounded-3 b-t-primary border-3">
        <div class="color-header mb-2">
            <h4>Theme color mode:</h4>
            <p>Choose between 3 different mix layout.</p>
        </div>
        <div class="color-body d-flex align-items-center justify-space-between">
            <div class="color-img" @click="customizerThemeMode('light')"><img class="img-fluid"
                    src="@/assets/images/customizer/light.png" alt="">
                <div class="customizer-overlay"></div>
                <div class="button color-btn light-setting"><a href="javascript:void(0)">LIGHT</a></div>
            </div>
            <div class="color-img mx-1" @click="customizerThemeMode('dark-only')"><img class="img-fluid"
                    src="@/assets/images/customizer/dark.png" alt="">
                <div class="customizer-overlay"></div>
                <div class="button color-btn dark-setting"><a href="javascript:void(0)">Dark</a></div>
            </div>
            <div class="color-img" @click="customizerThemeMode('dark-sidebar')"><img class="img-fluid"
                    src="@/assets/images/customizer/mix.png" alt="">
                <div class="customizer-overlay"></div>
                <div class="button color-btn mix-setting"><a href="javascript:void(0)">Mix</a></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { uselayoutStore } from "@/store/layout";
let storeLayout = uselayoutStore();
function customizerThemeMode(val: string) {
    storeLayout.setLayout({ class: val })
}
</script>