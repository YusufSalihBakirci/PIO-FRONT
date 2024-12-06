<template>
    <Card1 :colClass="colClass" cardClass="card overflow-hidden" cardhaderClass="card-no-border" header="true"
        title="Schedule a lesson" headerTop="true" haderTitle="true" down="true" cardbodyClass="p-0">
        <div class="default-datepicker">
            <div class="datepicker-here" data-language="en">
                <Datepicker class="" v-model="date" inline auto-apply />
            </div>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref, } from 'vue'
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
const date = ref(new Date());
let props = defineProps({

    colClass: String,

})
</script>