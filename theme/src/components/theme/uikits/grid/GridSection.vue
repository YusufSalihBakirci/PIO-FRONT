<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="grid-showcase" pre="true"
        preClass="mt-1 mt-1 mb-0" headerTitle="true" title="Nesting" desc="To nest your content with the default grid, add a new  <code>.row  </code> and set
                       of  <code>.col-sm-*</code> columns within an existing <code>.col-sm-*</code>  column.">
        <div class="row g-3">
            <div class="col-3"><span>Level 1: .col-3</span></div>
            <div class="col-9">
                <div class="pb-0 p-2 bg-light font-dark">
                    <div class="row g-2">
                        <div class="col-5"><span class="border border-2">Level 2: .col-5</span></div>
                        <div class="col-7"><span class="border border-2">Level 2: .col-7</span></div>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="pb-0 p-2 bg-light font-dark">
                    <div class="row g-2">
                        <div class="col-sm-2 col-4"><span class="border border-2">Level 1: .col-2</span></div>
                        <div class="col-sm-10 col-8"><span class="border border-2">Level 1: .col-10</span></div>
                    </div>
                </div>
            </div>
            <div class="col-4"><span>Level 2: .col-4 </span></div>
        </div>
    </Card3>


    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="grid-showcase " pre="true"
        preClass="mt-1 mt-1 mb-0" headerTitle="true" title="Order"
        desc="Using <code>.order </code>class set the order position." footer="true" grid="true" content=".order-*"
        startClass="first / 2 / 3 / 4 / 5 / last">
        <div class="row g-2">
            <div :class="item.class" v-for="(item, index) in order" :key="index"><span>{{ item.title }}</span></div>
        </div>
    </Card3>


    <Card3 colClass="col-sm-12 mb-xl-4" cardhaderClass="card-no-border pb-0" cardbodyClass="grid-showcase " pre="true"
        preClass="mt-1 mt-1 mb-0" headerTitle="true" title="Offset"
        desc="Offset the grid column using   <code>.offset-grid </code>class." footer="true" grid="true" content=".offset-*"
        startClass=" 1 / 2 / ... / 11 / 12">
        <div class="row g-2">
            <div :class="item.class" v-for="(item, index) in offset" :key="index"><span>{{ item.title }}</span></div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { order, offset } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>