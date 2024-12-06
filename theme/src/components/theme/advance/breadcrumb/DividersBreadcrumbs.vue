<template>
    <Card3 colClass="col-sm-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Divider Breadcrumb" desc="You can set breadcrumb using <code>.breadcrumb-icon</code> class.">
        <nav class="breadcrumb-icon mb-2" aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-style2 mb-0">
                <li class="breadcrumb-item">Home </li>
                <li class="breadcrumb-item active">Bonus Ui </li>
            </ol>
        </nav>
        <nav class="breadcrumb-icon mb-0" aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-style2 mb-0">
                <li class="breadcrumb-item">Home </li>
                <li class="breadcrumb-item">Ui kits </li>
                <li class="breadcrumb-item active">Grid </li>
            </ol>
        </nav>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>