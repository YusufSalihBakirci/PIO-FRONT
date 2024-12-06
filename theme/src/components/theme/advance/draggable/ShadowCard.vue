<template>
    <Card3 colClass="col-sm-12 col-xxl-6 mb-lg-3" cardhaderClass="card-no-border pb-0" cardClass="shadow-none " pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Without Shadow Card" desc="You can draggable cards anywhere.">
        <div class="alert text-success border-success alert-dismissible fade show" role="alert"><i
                class="fa-regular fa-clock"> </i>
            <p class="mb-0">One of <strong>YouTube's </strong>most crucial ranking factors is Watch Time.</p>
            <button class="btn-close" type="button" aria-label="Close"></button>
        </div>
        <div class="alert text-secondary border-secondary outline-2x alert-dismissible fade show alert-icons mb-0"
            role="alert"><i class="fa-solid fa-thumbs-up"> </i>
            <p class="mb-0"><b> Well done ! </b>You successfully read this important message.</p>
            <button class="btn-close" type="button" aria-label="Close"></button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>