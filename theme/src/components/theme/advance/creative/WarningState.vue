<template>
    <Card3 colClass="col-xxl-4 col-md-6" cardClass="height-equal "
        cardhaderClass="border-l-warning card-no-border pb-0 border-3 " pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Border Warning State"
        desc="Use the class of<code>.b-l-* </code>for left border and <code>.border-3 </code>is used to increase the width of the border.">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item  fw-bold" :class="item.colorClass" v-for="(item, index) in warningstate"
                :key="index">{{
                    item.text }}</li>
        </ol>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { warningstate } from "@/core/data/advance"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>