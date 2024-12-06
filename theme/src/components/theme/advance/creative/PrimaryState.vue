<template>
    <Card3 colClass="col-xxl-4 col-md-6" cardClass="height-equal "
        cardhaderClass="border-l-primary border-3 card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Border Primary State"
        desc="Use the class of<code>.b-l-* </code>for left border and <code>.border-3 </code>is used to increase the width of the border.">
        <div class="list-group"><a class="list-group-item list-group-item-action " v-for="(item, index) in primarystate"
                :key="index" :class="item.active == true ? 'active' : ''" href="javascript:void(0)"><img
                    class="rounded-circle" :src="getImages(item.img)" alt="user">{{ item.name }}</a></div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { primarystate } from "@/core/data/advance"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>