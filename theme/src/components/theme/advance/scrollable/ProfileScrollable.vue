<template>
    <Card3 colClass="col-xxl-4 col-md-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Profile Scrollable"
        desc="Use the <code>.list-group-item </code>through made profile and with used <code>.vertical-scroll </code>.">
        <perfect-scrollbar class="vertical-scroll scroll-demo scroll-b-none" :settings="settings3">
            <div class="list-group"><a class="list-group-item list-group-item-action list-hover-primary"
                    href="javascript:void(0)" v-for="(item, index) in profile" :key="index"> <img class="rounded-circle"
                        :src="getImages(item.img)" alt="user">{{ item.name }}</a></div>
        </perfect-scrollbar>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue"
import { profile } from "@/core/data/scrollable"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const settings3 = {
    maxScrollbarLength: 60,
    suppressScrollY: true,
    suppressScrollX: false
}
</script>