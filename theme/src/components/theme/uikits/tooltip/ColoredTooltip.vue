<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Colored Tooltip" desc="Add <code>btn- *</code> class to set the colored tooltip.">
        <div class="common-flex">
            <button class="mb-0 me-0 btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-title="Primary">Primary</button>
            <button class="mb-0 me-0 btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-title="Secondary">Secondary</button>
            <button class="mb-0 me-0 btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-title="Success">Success</button>
            <button class="mb-0 me-0 btn btn-warning text-white" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-title="Warning">Warning</button>
            <button class="mb-0 me-0 btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-title="Danger">Danger</button>

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