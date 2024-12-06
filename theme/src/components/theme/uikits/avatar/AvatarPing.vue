<template>
    <Card3 colClass="col-xl-4 col-sm-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mb-0 mt-1"
        cardbodyClass="avatar-showcase" headerTitle="true" title="Avatar Ping"
        desc="To set ping animation use<code> .ping     </code> class.">
        <div class="avatars">
            <div class="avatar" v-for="(item, index) in ping" :key="index"><img class="rounded-circle" :class="item.class"
                    :src="getImages(item.img)" alt="avatar">
                <div class="ping " :class="item.status"> </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { ping } from "@/core/data/uikits"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>