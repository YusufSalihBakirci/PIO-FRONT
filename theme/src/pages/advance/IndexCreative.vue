<template>
    <Breadcrumbs main="Bonus Ui" mains="Creative Card" title="Creative Card" />
    <div class="container-fluid">
        <div class="row">
            <BorderCard />
            <PrimaryState />
            <WarningState />
            <SecondaryState />
            <AbsoluteCard />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const BorderCard = defineAsyncComponent(() => import("@/components/theme/advance/creative/BorderCard.vue"))
const PrimaryState = defineAsyncComponent(() => import("@/components/theme/advance/creative/PrimaryState.vue"))
const WarningState = defineAsyncComponent(() => import("@/components/theme/advance/creative/WarningState.vue"))
const SecondaryState = defineAsyncComponent(() => import("@/components/theme/advance/creative/SecondaryState.vue"))
const AbsoluteCard = defineAsyncComponent(() => import("@/components/theme/advance/creative/AbsoluteCard.vue"))
</script>