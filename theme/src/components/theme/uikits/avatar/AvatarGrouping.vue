<template>
    <Card3 colClass="col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mb-0 mt-1" headerTitle="true"
        cardbodyClass="avatar-showcase" title="Grouping"
        desc="Use set the group of avatars using    <code>.img-*(40/50/60/80/100) </code>& <code>.b-r-*(8/30/35) </code>class.">

        <div class="avatars">
            <div class="customers d-inline-block avatar-group" v-for="(items, index) in grouping" :key="index">
                <ul>
                    <li class="d-inline-block" v-for="(item, index) in items.children" :key="index"><img :class="item.class"
                            :src="getImages(item.img)" alt="#"></li>

                </ul>
            </div>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { grouping } from "@/core/data/uikits"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>