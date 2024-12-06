<template>
    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" cardbodyClass="progress-showcase row" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Striped Bar"
        desc="Add <code>.progress-bar-striped</code> class to set the striped progress-bar ">
        <div class="col">
            <div class="progress" v-for="(item, index) in striped" :key="index">
                <div class="progress-bar progress-bar-striped" :class="item.class" role="progressbar"
                    :style="{ 'width': item.width }" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </Card3>


    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" cardbodyClass="progress-showcase row" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Animated Bar"
        desc="To set the animated progress-bar use <code>.progress-bar-animated</code> class.">

        <div class="col">
            <div class="progress" v-for="(item, index) in striped" :key="index">
                <div class="progress-bar-animated  progress-bar-striped" :class="item.class" role="progressbar"
                    :style="{ 'width': item.width }" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { striped } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>