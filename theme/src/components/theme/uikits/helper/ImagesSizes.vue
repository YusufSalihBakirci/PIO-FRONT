<template>
    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Images Sizes"
        desc=" Set different type of height & width using  <code>.img-* </code>&  <code>.img-h-* </code>class.">
        <div class="gradient-border gap-md-3 gap-2"><img :class="item.class" v-for="(item, index) in imgesize" :key="index"
                :src="getImages(item.img)" alt="img-size-30"></div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { imgesize } from "@/core/data/uikits"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>