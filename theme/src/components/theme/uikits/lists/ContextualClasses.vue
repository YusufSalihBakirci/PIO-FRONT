<template>
    <Card3 colClass="col-xxl-6 col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Contextual classes"
        desc="Use contextual classes to style list items with a stateful background and color.<code>.list-light-*</code> and<code>text-*</code>.">
        <div class="list-group"><a class="list-group-item " :class="item.class" v-for="(item, index) in contextual"
                :key="index" href="#">This
                is {{ item.color }} bg you can use <em :class="item.txt">{{ item.title }}</em>
                class.</a></div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { contextual } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>