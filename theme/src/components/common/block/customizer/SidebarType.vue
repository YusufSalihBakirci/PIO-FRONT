<template>
    <div class="mb-3 p-2 rounded-3 b-t-primary border-3">
        <div class="sidebar-type mb-2">
            <h4>Sidebar type:</h4>
            <p>Choose between 2 different sidebar types.</p>
        </div>
        <form>
            <div class="sidebar-body form-check radio ps-0">
                <ul class="radio-wrapper">
                    <li class="vertical-setting" @click="customizeSidebarSetting('compact-wrapper', 'default')">
                        <input class="form-check-input" id="radio-icon" type="radio" name="radio2" value="option2"
                            checked><label class="form-check-label" for="radio-icon"><span>Vertical</span></label>
                    </li>
                    <li class="horizontal-setting" @click="customizeSidebarSetting('horizontal-sidebar ', 'Horizontal')">
                        <input class="form-check-input" id="radio-icon4" type="radio" name="radio2" value="option2"><label
                            class="form-check-label" for="radio-icon4"><span>Horizontal</span></label>
                    </li>
                </ul>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useMenuStore } from "@/store/menu";
import { uselayoutStore } from "@/store/layout";
import { useRouter } from "vue-router";
let router = useRouter();
let store = useMenuStore();
let storeLayout = uselayoutStore();
function customizeSidebarSetting(val: string, layout: string) {
    storeLayout.layouts.settings.sidebar_setting = val;
    storeLayout.setCustomizeSidebarType(val);
    router.push({ query: { layout: layout } }).catch(err => err);
}
onMounted(() => {
    if (localStorage.getItem("SidebarType") === 'compact-wrapper') {
        storeLayout.layouts.settings.sidebar_setting = 'compact-wrapper';
        storeLayout.setCustomizeSidebarType('compact-wrapper');
    }
    else {
        storeLayout.layouts.settings.sidebar_setting = 'horizontal-sidebar';
        storeLayout.setCustomizeSidebarType('horizontal-sidebar');
    }
})
</script>