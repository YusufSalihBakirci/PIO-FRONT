<template>
    <Card3 colClass="col-md-6" cardhaderClass="card-no-border pb-0" cardbodyClass="fill-tooltip" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Filled Tooltip"
        desc="Fill the btn on the hover effect with the help of <code>.btn-outline </code>class.">
        <div class="common-flex">
            <button class="btn btn-outline-primary mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-html="true"
                data-bs-placement="top" data-bs-title="Tooltip Primary">Tooltip Primary</button>
            <button class="btn btn-outline-secondary mb-0 me-0" type="button" data-bs-toggle="tooltip"
                data-bs-placement="top" data-bs-html="true" data-bs-title="Tooltip Secondary">Tooltip Secondary</button>
            <button class="btn btn-outline-success mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-html="true" data-bs-title="Tooltip Success">Tooltip Success</button>
            <button class="btn btn-outline-info mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-html="true" data-bs-title="Tooltip Info">Tooltip Info</button>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, onMounted, } from 'vue'
import { Tooltip } from "bootstrap";
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
onMounted(() => {

    new Tooltip(document.body, {
        selector: "[data-bs-toggle='tooltip']",
    })
})
</script>