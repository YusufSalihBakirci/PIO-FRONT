<template>
    <Card3 colClass="col-xxl-4 col-md-12" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Flush Lists"
        desc=" Use<code> .list-group-flush</code> to remove some borders and rounded corners to render list group items.">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(item, index) in flushs" :key="index"><i class="iconly-Arrow-Right-3 icli">
                </i>{{ item.title }}</li>
        </ul>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { flushs } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>