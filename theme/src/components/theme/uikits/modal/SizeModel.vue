<template>
    <Card3 colClass="col-lg-6" cardhaderClass="card-no-border pb-0" cardbodyClass="badge-spacing" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Sizes Modal"
        desc="Set the different size of modal using <code>.bs-example-modal-(xl,lg,sm,fullscreen).</code>">
        <div class="btn " :class="item.class" v-for="(item, index) in sizemodal" :key="index" data-bs-toggle="modal"
            :data-bs-target="item.id">{{ item.title }}</div>
        <FullsereenModa />
        <ExtralargeModal />
        <LargeModal />
        <SmallModal />
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { sizemodal } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const FullsereenModa = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/FullsereenModa.vue"))
const ExtralargeModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/ExtralargeModal.vue"))
const LargeModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/LargeModal.vue"))
const SmallModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/SmallModal.vue"))
</script>