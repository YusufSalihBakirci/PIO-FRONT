<template>
    <Card3 colClass="col-sm-12 col-xxl-6 mb-lg-3" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" ico="true" icon="fa-solid fa-arrows-up-down-left-right" title=" Icon In Heading"
        desc="You can draggable cards anywhere.">
        <div class="alert border-warning alert-dismissible fade show p-0" role="alert">
            <div class="alert-arrow bg-warning"><i class="fa-regular fa-clock"></i></div>
            <p>Your time Over after 5 minute</p>
        </div>
        <div class="alert border-danger alert-dismissible fade show p-0 mb-0" role="alert">
            <div class="alert-arrow bg-danger"><i class="fa-regular fa-heart"></i></div>
            <p>Oh snap! Change a few things up notification check</p>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>