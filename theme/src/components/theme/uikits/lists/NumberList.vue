<template>
    <Card3 colClass="col-xxl-4 col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Lists With Numbers"
        desc="Use the  <code>.list-group-numbered  </code>to ordered wise print numbers.">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item  fw-bold" :class="item.class" v-for="(item, index) in numbers" :key="index">
                {{ item.title }}</li>
        </ol>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { numbers } from "@/core/data/uikits"

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>