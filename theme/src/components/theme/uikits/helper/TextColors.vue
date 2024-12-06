<template>
    <Card3 colClass="col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Font Sizes" desc="Use <code>.f-*[14/16/18..etc]  </code>class to add font-sizes.">
        <div class="gradient-border">
            <div class="font-wrapper border" v-for="(item, index) in fontsize" :key="index">
                <div :class="item.class">Font-size .{{ item.class }}</div>
            </div>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { fontsize } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>