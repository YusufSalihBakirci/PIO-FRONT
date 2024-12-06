<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="grid-showcase mb-0" pre="true"
        preClass="mt-1 mt-1 mb-0" headerTitle="true" title="Vertical Alignment"
        desc="Use  <code>align-items-*</code> class to set vertical alignment. " footer="true" grid="true"
        content=".align-items-*" startClass=" start / center / end / baseline / stretch">
        <div class="row">
            <div class="col-lg-4" v-for="(item, index) in vertical" :key="index">
                <div class="row grid-vertical align-items-start m-1 g-2 bg-light" :class="item.class">
                    <div class="col-6"><span class="bg-white text-dark">one column</span></div>
                    <div class="col-6"><span class="bg-white text-dark">two column</span></div>
                </div>
            </div>
        </div>
    </Card3>

    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0"
        cardbodyClass="grid-showcase grid-align horizontal-align" pre="true" preClass="mt-1 mt-1 mb-0" headerTitle="true"
        footer="true" title="Horizontal alignment"
        desc="Set horizontal alignment using <code>justify-content-*   </code> class." grid="true"
        content=".justify-content-*" startClass="start / center / end / around / between">
        <div class="row  bg-light m-0 mb-3" :class="item.class" v-for="(item, index) in horizoltal" :key="index">
            <div class="col-5"><span class=" text-dark">One column</span></div>
            <div class="col-5"><span class=" text-dark">Two column</span></div>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { vertical, horizoltal } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>