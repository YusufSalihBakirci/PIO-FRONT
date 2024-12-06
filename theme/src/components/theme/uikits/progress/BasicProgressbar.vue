<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="progress-showcase row" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Progress Bars"
        desc="Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.
                      We use the <code>.progress </code>as a wrapper to indicate the max value of the progress bar. The <code>.progress-bar </code>requires an inline style, utility class, or custom CSS to set their width.">

        <div class="col">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
            <div class="progress" v-for="(item, index) in basic" :key="index">
                <div class="progress-bar " :class="item.class" role="progressbar" :style="{ 'width': item.width }"
                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ item.width }}</div>
            </div>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { basic } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>