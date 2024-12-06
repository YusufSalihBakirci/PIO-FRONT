<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="grid-showcase" pre="true"
        preClass="mt-1 mt-1 mb-0" headerTitle="true" title="Column Grid"
        desc="Use predefined grid classes using  <code>.col-md-* </code>class to set the grid system. ">
        <div class="row">
            <div class=" text-center" :class="item.class" v-for="(item, index) in columm" :key="index">
                <span>{{ item.class }}</span>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { columm } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>