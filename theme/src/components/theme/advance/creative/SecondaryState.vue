<template>
    <Card3 colClass="col-xxl-4 col-12" cardClass="height-equal "
        cardhaderClass="border-l-secondary card-no-border pb-0 border-2 " pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Border Secondary State"
        desc="Use the class of<code>.b-l-* </code>for left border and <code>.border-3 </code>is used to increase the width of the border.">
        <ol class="list-group list-group-numbered scroll-rtl">
            <li class="list-group-item d-flex align-items-start flex-wrap" v-for="(item, index) in secondarystate"
                :key="index">
                <div class="ms-2 me-auto">{{ item.name }}</div><span class="badge  rounded-pill p-2"
                    :class="item.badgeColor">{{ item.badgeText }}</span>
            </li>
        </ol>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { secondarystate } from "@/core/data/advance"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>