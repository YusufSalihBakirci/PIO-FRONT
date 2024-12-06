<template>
    <Card3 colClass="col-xxl-6 col-12 box-col-12" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Horizontal Lists"
        desc="Use<code>.list-group-horizontal</code>to change the layout of list group items from vertical to horizontal across all breakpoints.<code>.list-group-horizontal-[sm/md/lg/xl/xxl]</code>.">
        <div class="horizontal-list-wrapper dark-list">
            <ul class="fw-bold list-group list-group-horizontal-sm pb-2" v-for="(items, index) in horizontal" :key="index">
                <li class="list-group-item " :class="item.class" v-for="(item, index) in items.children" :key="index">{{
                    item.title }}</li>

            </ul>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { horizontal } from "@/core/data/uikits"

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>