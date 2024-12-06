<template>
    <Card3 colClass="col-sm-12 col-xl-6" cardhaderClass="card-no-border pb-0" v-for="(item, index) in card" :key="index"
        pre="true" preClass="mb-0 mt-1" headerTitle="true" :title="item.title" :desc="item.desc">
        <p class="mb-0" v-html="item.body"></p>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { card } from "@/core/data/advance"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>