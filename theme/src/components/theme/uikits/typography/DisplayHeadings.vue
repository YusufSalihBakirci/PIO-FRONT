<template>
    <Card3 colClass="col-xl-12" cardClass="pb-0" cardhaderClass="card-no-border pb-0"
        cardbodyClass="d-flex flex-column gap-2" pre="true" preClass="desc mb-0 mt-1" headerTitle="true" titles="true"
        title="Display headings" :desc="desc">
        <div v-for="(item, index) in display" :key="index" v-html="item.font"></div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { display } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a</span><code>display heading</code><span>- a larger, slightly more opinionated heading style.</span>")
</script>