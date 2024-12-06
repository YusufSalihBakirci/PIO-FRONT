<template>
    <Card3 colClass="col-xl-12" cardhaderClass="card-no-border pb-0" cardbodyClass="d-flex flex-column gap-3"
        titleClass="mb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true" title="Font weight"
        desc="Using <code>f-w-*</code> class, you can change the font weight.">
        <div v-for="(item, index) in weight" :key="index" v-html="item.font">
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { weight } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>