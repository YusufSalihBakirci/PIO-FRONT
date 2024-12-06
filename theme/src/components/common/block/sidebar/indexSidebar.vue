<template>
    <div class="left-arrow" :class="hideLeftArrow ? 'disabled' : hideLeftArrow" @click="display2()" id="left-arrow">
        <vue-feather type="arrow-left"></vue-feather>
    </div>
    <div class="main-sidebar" id="main-sidebar"
        :style="[layoutobject?.includes('horizontal-sidebar') ? { 'margin-left': margin + 'px' } : {}]">
        <ul class="sidebar-menu" id="simple-bar">
            <div style="margin: -15px -25px;" class="simplebar-wrapper">
                <div class="simplebar-height-auto-observer-wrapper">
                    <div class="simplebar-height-auto-observer"></div>
                </div>
                <div class="simplebar-mask">
                    <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                        <div class="simplebar-content-wrapper" style="height: 100%; overflow: scroll auto;">
                            <div class="simplebar-content" style="padding: 15px 25px;">
                                <li class="pin-title sidebar-main-title" :class="store.pinedArray.length ? 'show' : ''">
                                    <div>
                                        <h5 class="sidebar-title f-w-700">Pinned</h5>
                                    </div>
                                </li>
                                <NavMenu v-for="(menuItem, index) in store.data" :key="index" :menu-item="menuItem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
    <div class="right-arrow" id="right-arrow" :class="hideRightArrow ? 'disabled' : hideRightArrow" @click="display()">
        <vue-feather type="arrow-right"></vue-feather>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref, watch, computed, onMounted } from 'vue'
import { uselayoutStore } from "@/store/layout";
import { useMenuStore } from "@/store/menu";
const NavMenu = defineAsyncComponent(() => import("@/components/common/block/sidebar/NavMenu.vue"))
let layoutobj = ref<any>({});
let isActive = ref<boolean>(false);
let store = useMenuStore();
let storeLayout = uselayoutStore();
let menu = store.data
let hideRightArrow = ref(store.hideRightArrow);
let hideLeftArrow = ref(store.hideLeftArrow);
let margin = ref(store.margin);

const layoutobject: any = computed({
    get() {
        return storeLayout.layouts.settings.sidebar_setting;
    },
    set() {
        layoutobj.value = storeLayout.layouts.settings.sidebar_setting;
        return layoutobj;
    },
});

function display() {
    if (isActive.value == false) {
        isActive.value = !isActive.value;
    }
    if (margin.value >= -3000) {
        margin.value = margin.value - 500;
        hideLeftArrow.value = false;
        hideRightArrow.value = false
    }
    if (margin.value == -3500) {
        hideRightArrow.value = true
    }
}
function display2() {
    if (margin.value <= -500) {
        margin.value = margin.value + 500;
        hideLeftArrow.value = false;
        hideRightArrow.value = false
    }
    if (margin.value == 0) {
        hideLeftArrow.value = true;
    }
}
onMounted(() => {
    setTimeout(() => {
        const elmnt = document.getElementById("myDIV");

        store.menuWidth > window.innerWidth ? ((store.hideRightArrow = false), (store.hideLeftArrowRTL = false)) : ((store.hideRightArrow = false), (store.hideLeftArrowRTL = true));
    }, 500);
    if (margin.value == 0) {
        hideRightArrow.value = false
    }
});
</script>