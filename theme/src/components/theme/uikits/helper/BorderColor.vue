<template>
    <Card3 colClass="col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Border color" titles="true" desc="Use the <code>.b-*/.b-t-*/.b-b-*/.b-l-*/.b-r-* </code>class for borders.">
        <div class="gradient-border">
            <div class="helper-common-box" v-for="(item, index) in bordercolor" :key="index">
                <div class="helper-box border fill-wrapper" :class="item.class"> </div><span>{{ item.title
                }}</span>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { bordercolor } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>