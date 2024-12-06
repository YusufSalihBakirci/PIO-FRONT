<template>
    <Card3 colClass="col-md-6" cardhaderClass="card-no-border pb-0" cardbodyClass="progress-showcase row progress-b-space"
        pre="true" preClass="mt-1 mb-0" headerTitle="true" title="Small Progress Bars"
        desc="Use<code> .sm-progress-bar</code>  class to set the small size of progress bar.">
        <div class="col">
            <div class="progress sm-progress-bar overflow-visible mt-4">
                <div class="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped"
                    role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"><span
                        class="text-primary progress-label">30 MB Data</span><span class="animate-circle"></span></div>
            </div>
            <div class="progress sm-progress-bar overflow-visible">
                <div class="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped"
                    role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><span
                        class="text-primary progress-label">50 MB Data</span><span class="animate-circle"></span></div>
            </div>
            <div class="progress sm-progress-bar overflow-visible">
                <div class="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped"
                    role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span
                        class="text-primary progress-label">75 MB Data</span><span class="animate-circle"> </span></div>
            </div>
        </div>
    </Card3>


    <Card3 colClass="col-md-6" cardhaderClass="card-no-border pb-0" cardbodyClass="progress-showcase row" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Large Progress Bars"
        desc="Set the large progress bar with the help of<code> .lg-progress-bar</code>  class.">
        <div class="col">
            <div class="progress lg-progress-bar" v-for="(item, index) in large" :key="index">
                <div class="progress-bar " :class="item.class" role="progressbar" :style="{ 'width': item.width }"
                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ item.width }}</div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { large } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>