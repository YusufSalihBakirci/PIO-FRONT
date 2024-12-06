<template>
    <Card3 colClass="col-xl-4 col-sm-6" cardhaderClass="card-no-border pb-0" titleClass="mb-0" pre="true"
        preClass="mb-0 mt-1" cardbodyClass="avatar-showcase" headerTitle="true" title="Status indicator"
        desc="Add <code> .status-*(online/offline/dnd)</code> class to set the status. ">

        <div class="avatars">
            <div class="avatar" v-for="(item, index) in status" :key="index"><img class=" rounded-circle"
                    :class="item.class" :src="getImages(item.img)" alt="#">
                <div class="status" :class="item.status"></div>
            </div>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { status } from "@/core/data/uikits"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>