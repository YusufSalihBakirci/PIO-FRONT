<template>
    <Card3 :colClass="item.col" cardClass="height-equal" v-for="(item, index) in footer" :key="index" footer="true"
        :footerclass="item.footerclass" :footersClass="item.footerClass" :cardbodyClass="item.bodyclass"
        :titleClass="item.class" :cardhaderClass="item.haderclass" headerTitle="true" :title="item.title"
        footertitle="Admiro Theme">
        <h5 :class="item.bodyClass"> {{ item.bodytitle }} </h5>
        <p class="mb-0">{{ item.bodydesc }}</p>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { footer } from "@/core/data/advance"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>