<template>
    <Card3 colClass="col-xxl-4 col-md-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Active Lists"
        desc="Use<code>.active</code>to a<code>.list-group-item</code> to indicate the current active.">
        <ul class="list-group">
            <li class="list-group-item " :class="item.class" v-for="(item, index) in active" :key="index"
                aria-current="true">
                <i class="iconly-Arrow-Right-3 icli"> </i>{{ item.title }}
            </li>
        </ul>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { active } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>