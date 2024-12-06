<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Tooltip  Directions"
        desc="To set different direction use  <code>data-bs-placement='top/right/bottom/left'.</code>">
        <div class="common-flex">
            <button class="btn btn-primary mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                title="Tooltip on top">Top Tooltip</button>
            <button class="btn btn-secondary mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="right"
                title="Tooltip on right">Right Tooltip</button>
            <button class="btn btn-success mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom"
                title="Tooltip on bottom">Bottom Tooltip</button>
            <button class="btn btn-warning mb-0 me-0 text-white" type="button" data-bs-toggle="tooltip"
                data-bs-placement="left" title="Tooltip on left">Left Tooltip</button>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted, } from 'vue'
import { Tooltip } from "bootstrap";
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
onMounted(() => {

    new Tooltip(document.body, {
        selector: "[data-bs-toggle='tooltip']",
    })
})
</script>