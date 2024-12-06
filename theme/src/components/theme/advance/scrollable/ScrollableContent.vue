<template>
    <Card3 colClass="col-xxl-4 col-md-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Scrollable Content"
        desc=" Use the <code>.list-group-item </code>through made profile and with used <code>.vertical-scroll </code>.">
        <perfect-scrollbar class="vertical-scroll scroll-demo scroll-b-none" :settings="settings5">
            <div class="list-group main-lists-content">
                <a class="list-group-item list-group-item-action list-hover-primary" :class="item.actve ? 'active' : ''"
                    v-for="(item, index) in scrollable" :key="index" href="#" aria-current="true">
                    <div class="list-wrapper gap-0"><img class="list-img" :src="getImages(item.img)" alt="profile">
                        <div class="list-content">
                            <h6>{{ item.name }}</h6>
                            <p>{{ item.email }}</p><small>{{ item.days }}</small>
                        </div>
                    </div>
                </a>
            </div>

        </perfect-scrollbar>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue"
import { scrollable } from "@/core/data/scrollable"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

const settings5 = {
    maxScrollbarLength: 60,
    suppressScrollY: true,
    suppressScrollX: false
}
</script>