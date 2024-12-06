<template>
    <Card3 colClass="col-xl-4" cardhaderClass="card-no-border pb-0" pre="true" preClass="desc mb-0 mt-1" headerTitle="true"
        title="Disable Star Rating"
        desc="<span>Rating is displayed using</span><code>.rating-star</code><span> id using javascript.</span>">
        <div class="rating-container">
            <rate :length="5" :value="2" :disabled="true" />
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>