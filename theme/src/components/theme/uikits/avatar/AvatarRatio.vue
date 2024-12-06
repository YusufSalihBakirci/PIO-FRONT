<template>
    <Card3 colClass="col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mb-0 mt-1" headerTitle="true"
        title="Ratio" cardbodyClass="avatar-showcase"
        desc="Give the shape to avatar using <code>.ratio</code> and <code> img-*(50/70/80/90/100)</code> class.">

        <div class="avatars">
            <div class="avatar ratio" v-for="(item, index) in ratio" :key="index"><img class="b-r-8 " :class="item.class"
                    :src="getImages(item.img)" alt="#"></div>

        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { ratio } from "@/core/data/uikits"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>