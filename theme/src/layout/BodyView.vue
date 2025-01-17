<template>
    <div class="page-wrapper"
    :class="[!store.togglesidebar ? 'sidebar-open' : '', display ? 'compact-wrapper ' : layoutobj]" id="pageWrapper">
    <header class="page-header row">
        <Header @click="sidebar_toggle" />
    </header>
    <div class="page-body-wrapper">
        <div class="overlay"></div>
        <aside class="page-sidebar" :class="storeLayout.svg == 'stroke-svg' ? '' : 'iconcolor-sidebar'"
        :data-sidebar-layout="storeLayout.svg == 'stroke-svg' ? 'stroke-svg' : 'iconcolor-sidebar'">
        <Sidebar />
    </aside>
    <div class="page-body">
        <router-view></router-view>
    </div>
    <FooterView />
</div>
<TapTop />
    </div>
    <!-- <Customizer/> -->
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref, onMounted, watch } from 'vue'
import { useMenuStore } from "@/store/menu";
import { uselayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
const TapTop = defineAsyncComponent(() => import("@/layout/TapTop.vue"))
const FooterView = defineAsyncComponent(() => import("@/components/common/block/FooterView.vue"))
const Sidebar = defineAsyncComponent(() => import("@/components/common/block/sidebar/indexSidebar.vue"))
const Header = defineAsyncComponent(() => import("@/components/common/block/header/indexHeader.vue"))
const Customizer = defineAsyncComponent(() => import("@/components/common/block/customizer/IndexCustomizer.vue"))
let sidebar_toggle_var = ref<boolean>(false);
let display = ref<boolean>(false)
let layoutobj = ref<any>({});
let storeLayout = uselayoutStore();
const store = useMenuStore();
const { layouts: layouts } = storeToRefs(storeLayout);
watch(
    () => layouts,
    () => {
        layoutobj.value = storeLayout.layouts.settings.sidebar_setting;
    },
    { deep: true },
);
watch(
    () => "router",
    () => {

        if ((window.innerWidth < 991 && storeLayout.layouts.settings.layout === 'Horizontal')) {
            const newlayout = JSON.parse(JSON.stringify(layoutobj).replace('horizontal-sidebar', 'compact-wrapper'));
            layoutobj.value = JSON.parse(JSON.stringify(newlayout))[storeLayout.layouts.settings.layout];
        } else {
            layoutobj.value = JSON.parse(JSON.stringify(layoutobj))[storeLayout.layouts.settings.layout];
        }
    }
)
function sidebar_toggle(value: boolean) {
    sidebar_toggle_var.value = !value;
}
function handleScroll() {
    if (window.innerWidth <= 1199) {
        display.value = true;
        store.togglesidebar = false

    } else {
        store.togglesidebar = true
        display.value = false;
    }
}
onMounted(() => {

    window.addEventListener('resize', handleScroll);
    layoutobj.value = storeLayout.layouts.settings.sidebar_setting;

});
</script>