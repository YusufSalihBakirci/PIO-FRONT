<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Pagination Size" desc="Pagination size using <code>.pagination-* </code>class.">
        <nav aria-label="Page navigation example" :class="items.nav" v-for="(items, index) in size" :key="index">
            <ul class="pagination  " :class="items.class">
                <li class="page-item" :class="item.active" v-for="(item, index) in items.children" :key="index"><a
                        class="page-link" href="javascript:void(0)">{{ item.title }}</a></li>
            </ul>
        </nav>
    </Card3>
</template>
<script lang="ts" setup>
import { size } from "@/core/data/advance"
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>