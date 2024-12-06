<template>
    <Card3 colClass="col-xl-12" cardhaderClass="card-no-border pb-0" cardbodyClass="badge-spacing" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Fullscreen Modal"
        desc="Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a<code> .modal-dialog</code>.">
        <button class="btn " :class="item.class" v-for="(item, index) in fullsecreenmodel" :key="index" type="button"
            data-bs-toggle="modal" :data-bs-target="item.id">{{ item.title }}</button>
        <FullscreenModallabel />
        <FullscreenSm />
        <FullscreenMd />
        <FullscreenLg />
        <FullscreenXl />
        <FullscreenXxl />
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { fullsecreenmodel } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const FullscreenModallabel = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/FullscreenModallabel.vue"))
const FullscreenSm = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/FullscreenSm.vue"))
const FullscreenLg = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/FullscreenLg.vue"))
const FullscreenXl = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/FullscreenXl.vue"))
const FullscreenXxl = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/FullscreenXxl.vue"))
const FullscreenMd = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/FullscreenMd.vue"))
let desc = ref<string>("Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a<code> .modal-dialog</code>. ")
</script>