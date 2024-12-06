<template>
    <Card3 colClass="col-sm-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Breadcrumb Alignment" desc="Breadcrumb alignment <code>.justify-content-*   </code>class.">
        <nav class="mb-0" aria-label="breadcrumb" v-for="(item, index) in breadcrumbAlignment" :key="index">
            <ol class="breadcrumb" :class="item.class">
                <li class="breadcrumb-item">Home </li>
                <li class="breadcrumb-item">Ui Kits </li>
                <li class="breadcrumb-item">Grid </li>
            </ol>
        </nav>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
import { breadcrumbAlignment } from "@/core/data/advance"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>