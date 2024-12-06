<template>
    <Card3 colClass="col-lg-6" cardhaderClass="card-no-border pb-0" cardbodyClass="badge-spacing" titleClass="mb-0"
        pre="true" preClass="mt-1 mb-0" headerTitle="true" title="Basic Modal"
        desc="Add different types of modal with the help of  <code>data-bs-target  </code>attribute.">

        <button class="btn px-xl-2 px-xxl-3" :class="item.class" v-for="(item, index) in basicmodal" :key="index"
            type="button" data-bs-toggle="modal" data-original-title="test" :data-bs-target="item.id">{{ item.title
            }}</button>
        <SimpleModel />
        <ScrollingModal />
        <TooltipsModal />
        <OpenModel />

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { basicmodal } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const SimpleModel = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/SimpleModel.vue"))
const ScrollingModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/ScrollingModal.vue"))
const TooltipsModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/TooltipsModal.vue"))
const OpenModel = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/OpenModel.vue"))
</script>
