<template>
    <TapTop />
    <div class="page-wrapper"
        :class="[!store.togglesidebar ? 'sidebar-open' : '', display ? 'compact-wrapper ' : layoutobj]" id="pageWrapper">
        <header class="page-header row">
            <Header @click="sidebar_toggle" />
        </header>
        <div class="page-body-wrapper">
            <div class="overlay"></div>
            <aside class="page-sidebar">
                <Sidebar />
            </aside>
            <div class="page-body">
                <router-view></router-view>
            </div>
            <FooterView />
        </div>

    </div>
    <Customizer />
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref, onMounted, watch } from 'vue'
import { useMenuStore } from "@/store/menu";
import { uselayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
const TapTop = defineAsyncComponent(() => import("@/layouts/TapTop.vue"))
const FooterView = defineAsyncComponent(() => import("@/components/common/block/FooterView.vue"))
const Sidebar = defineAsyncComponent(() => import("@/components/common/block/sidebar/IndexSidebar.vue"))
const Header = defineAsyncComponent(() => import("@/components/common/block/header/IndexHeader.vue"))
let sidebar_toggle_var = ref<boolean>(false);
let display = ref<boolean>(false)
let layoutobj = ref({});
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