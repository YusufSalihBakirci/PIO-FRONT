<template>
    <Card3 colClass="col-sm-12 col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Badges" desc="Use the  <code>.badge </code>utility class to make more badges.">
        <div class="badge-spacing"><span class="badge " :class="item.class" v-for="(item, index) in badges" :key="index">{{
            item.title }}</span>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { badges } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>