<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0"
        cardbodyClass="common-flex main-custom-form card-wrapper multiple-inputs" preClass="mt-1 mb-0" headerTitle="true"
        title="Multiple inputs" :desc="desc">
        <div class="input-group"><span class="input-group-text">First and last name</span>
            <input class="form-control" type="text" aria-label="First name">
            <input class="form-control" type="text" aria-label="Last name">
        </div>
        <div class="input-group multi-input"><span class="input-group-text">$</span><span
                class="input-group-text">0.00</span>
            <input class="form-control" type="text" aria-label="Dollar amount (with dot and two decimal places)">
        </div>
        <div class="input-group multi-input-2">
            <input class="form-control" type="text" aria-label="Dollar amount (with dot and two decimal places)"><span
                class="input-group-text">$</span><span class="input-group-text">0.00</span>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("While multiple <code>&lt;input&gt;</code>")
</script>