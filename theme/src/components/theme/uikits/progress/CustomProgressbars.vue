<template>
    <Card3 cardbodyClass=" progress-showcase row" cardhaderClass="card-no-border pb-0" cardClass="title-line" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Custom Bars"
        desc="Set the animated striped progress-bar with help of <code>.progress-bar-animated </code>& <code>.progress-bar-striped  </code>class.">

        <div class="col">
            <h6 class="mb-2">0% Getting Started </h6>
            <div class="progress mb-4">
                <div class="progress-bar-animated progress-bar-striped text-center" role="progressbar" aria-valuenow="0"
                    aria-valuemin="0" aria-valuemax="100"> </div>
            </div>
            <div v-for="(item, index) in custom" :key="index">
                <h6 class="mb-2">{{ item.title }}</h6>
                <div class="progress mb-4">
                    <div class="progress-bar-animated progress-bar-striped  text-center" :class="item.class"
                        role="progressbar" :style="{ 'width': item.width }" aria-valuenow="30" aria-valuemin="0"
                        aria-valuemax="100">{{ item.width }}</div>
                </div>
            </div>


        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { custom } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>