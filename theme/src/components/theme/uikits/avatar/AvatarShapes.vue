<template>
    <Card3 colClass="col-xl-4" pre="true" cardhaderClass="card-no-border pb-0" preClass="mb-0 mt-1" headerTitle="true"
        cardbodyClass="avatar-showcase" title="Shapes" desc="Use <code>.b-r-*(8/30/35/25)</code> class shapes of avatar.">

        <div class="avatars">
            <div class="avatar" v-for="(item, index) in shapes" :key="index"><img :class="item.class"
                    :src="getImages(item.img)" alt="#"></div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { shapes } from "@/core/data/uikits"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("Using the<code>.b-r-* (8/30/35/25)</code> class you can set the shapes of avatar.")
</script>