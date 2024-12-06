<template>
    <Card3 colClass="col-xxl-4 col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Disabled Lists "
        desc="Use<code> .disabled </code>to a <code>.list-group-item</code> to make it appear disabled.">
        <div class="list-group">
            <a class="list-group-item list-group-item-action " :class="item.class" v-for="(item, index) in disabld"
                :key="index" href="javascript:void(0)"><img class="rounded-circle" :src="getImages(item.img)" alt="user">{{
                    item.title }}</a>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { disabld } from "@/core/data/uikits"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>