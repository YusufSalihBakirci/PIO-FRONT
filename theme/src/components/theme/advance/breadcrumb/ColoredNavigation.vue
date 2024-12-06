<template>
    <Card3 colClass="col-sm-6" pre="true" cardhaderClass="card-no-border pb-0" cardbodyClass="color-breadcrumb"
        preClass="mt-1 mb-0" headerTitle="true" title="Colored Breadcrumb"
        desc="Breadcrumb class and set background <code>bg-* </code>class.">
        <nav class="mb-0" aria-label="breadcrumb">
            <ol class="breadcrumb bg-primary mb-1">
                <li class="breadcrumb-item">Home </li>
                <li class="breadcrumb-item">Ui Kits </li>
                <li class="breadcrumb-item">Avatars </li>
            </ol>
        </nav>
        <nav class="mb-0" aria-label="breadcrumb">
            <ol class="breadcrumb bg-secondary mb-0">
                <li class="breadcrumb-item">Home </li>
                <li class="breadcrumb-item">Ui Kits </li>
                <li class="breadcrumb-item">Dropdown</li>
            </ol>
        </nav>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>