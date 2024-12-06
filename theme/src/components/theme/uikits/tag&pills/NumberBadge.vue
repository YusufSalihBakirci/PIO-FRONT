<template>
    <Card3 colClass="col-sm-12 col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Number Badges" desc=" Use numbers as a badge with the help of <code>.badge</code> class.">
        <div class="badge-spacing"><a class="badge" :class="item.class" v-for="(item, index) in number" :key="index"
                href="#">{{ item.title }}</a>
        </div>
    </Card3>


    <Card3 colClass="col-sm-12 col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Number Pills"
        desc="Set rounded pill with number using <code>.rounded-circle</code> class.">
        <div class="badge-spacing"><span class="badge rounded-circle  " :class="item.class" v-for="(item, index) in number"
                :key="index">{{ item.title }}</span>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { number } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>