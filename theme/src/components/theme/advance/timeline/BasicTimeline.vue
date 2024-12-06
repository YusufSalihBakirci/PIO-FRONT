<template>
    <Card3 colClass="col-xl-6 box-col-6 notification main-timeline" cardhaderClass="card-no-border pb-0" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Basic Timeline "
        desc="Use the<code>.main-basic-timeline</code>class through made basic timeline.">
        <ul>
            <li class="d-flex" v-for="(item, index) in basictimeline" :key="index">
                <div :class="item.dotClass"></div>
                <div class="w-100 ms-3">
                    <p class="d-flex justify-content-between mb-2"><span class="date-content bg-light-primary">{{ item.date
                    }}</span><span>{{ item.time }}</span></p>
                    <h6 class="f-w-600">{{ item.title }}<span class="dot-notification"></span></h6>
                    <p class="f-m-light">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </Card3>
</template>
<script lang="ts" setup>
import { basictimeline } from "@/core/data/advance"
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>                