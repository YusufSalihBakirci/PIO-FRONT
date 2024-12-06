<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Basic Tooltip" desc="Use <code>data-bs-toggle='tooltip' </code> to set the tooltip.">
        <button class="example-popover btn btn-primary mb-0 me-0" type="button" data-container="body"
            data-bs-toggle="tooltip" data-bs-placement="top" title="Surprise!!! Thank you for hovering...">It's
            magic please hover me... </button>
        <h5 class="mb-1 py-4 pb-0">Inline Tooltip Content</h5>
        <p>Here, is some content about tooltips that you can set the<a class="text-primary fw-bold" data-bs-toggle="tooltip"
                data-bs-placement="top" data-bs-title="tooltip" data-bs-original-title="popover text"> tooltip</a> inside
            the content with help of tooltip and also
            you can add
            <button class="btn btn-success text-white border-0 px-3 py-1 me-0 mb-0" type="button" data-bs-toggle="tooltip"
                data-bs-placement="top" data-bs-title="button">button </button> .Tooltips
            helps you to add more and more content. A tooltip is often used to specify extra information about
            something when the user moves the mouse pointer over an element
        </p>
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