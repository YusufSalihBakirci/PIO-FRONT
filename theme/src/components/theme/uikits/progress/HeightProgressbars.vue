<template>
    <Card3 cardbodyClass="progress-showcase row" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Custom Sizes"
        desc="customize the progress bar height with the help of giving height to bar.">

        <div class="col">
            <div class="progress" style="height: 1px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 25%" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress" style="height: 5px;">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress" style="height: 11px;">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress" style="height: 19px;">
                <div class="progress-bar bg-info" role="progressbar" style="width: 100%" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { customheight } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>