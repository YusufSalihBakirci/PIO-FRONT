<template>
    <div class="sidebar-pannle-main" @click="store.openCustomizer">
        <ul>
            <li class="cog-click icon-btn btn-primary" id="cog-click"><i class="fa-solid fa-spin fa-cog"></i></li>
        </ul>
    </div>
    <section class="setting-sidebar " :class="store.openSection ? 'open' : ''">
        <ConfigurationView />
        <div class="customizer-body">
            <ThemeColorMode />
            <SidebarIcon />
            <LayoutType />
            <SidebarType />
            <UnlimitedColor />
        </div>
        <CustomizerFooter />
    </section>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ConfigurationView = defineAsyncComponent(() => import("@/components/common/block/customizer/ConfigurationView.vue"))
const ThemeColorMode = defineAsyncComponent(() => import("@/components/common/block/customizer/ThemeColorMode.vue"))
const SidebarIcon = defineAsyncComponent(() => import("@/components/common/block/customizer/SidebarIcon.vue"))
const LayoutType = defineAsyncComponent(() => import("@/components/common/block/customizer/LayoutType.vue"))
const SidebarType = defineAsyncComponent(() => import("@/components/common/block/customizer/SidebarType.vue"))
const UnlimitedColor = defineAsyncComponent(() => import("@/components/common/block/customizer/UnlimitedColor.vue"))
const CustomizerFooter = defineAsyncComponent(() => import("@/components/common/block/customizer/CustomizerFooter.vue"))
import { useMenuStore } from '@/store/menu'
const store = useMenuStore()
</script>