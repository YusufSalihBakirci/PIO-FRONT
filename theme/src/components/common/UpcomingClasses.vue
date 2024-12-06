<template>
    <Card1 :colClass="colClass" :cardClass="cardClass" cardhaderClass="card-no-border pb-0" header="true"
        title="Upcoming Classes" headerTop="true" haderTitle="true" down="true" cardbodyClass="upcoming-class pt-0">
        <div v-for="(item, index) in upcoming" :key="index">
            <div class="activity-day">
                <h6>{{ item.date }}</h6>
            </div>
            <ul>
                <li class="d-flex align-items-center gap-2" v-for="(items, index) in item.children" :key="index">
                    <div class="flex-shrink-0">
                        <h5>{{ items.time }}</h5>
                    </div>
                    <div class="flex-grow-1 border-2 " :class="items.class">
                        <h6>{{ items.title }}</h6>
                        <p>{{ items.desc }}</p>
                    </div><i class="fa-solid fa-circle pull-right" :class="items.dotclass"></i>
                </li>

            </ul>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { upcoming } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
let props = defineProps({
    cardClass: String,
    colClass: String,

})
</script>