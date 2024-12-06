<template>
    <Card3 colClass="col-xxl-8 col-xl-7 box-col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Horizontal Timeline"
        desc="Use the<code>.square-timeline</code> main class through create new variations of timeline. ">
        <ul class="list-inline events timeline-list  row" :class="items.ulClass"
            v-for="(items, index) in horizontialtimeline" :key="index">
            <div :class="item.divClass" v-for="(item, index) in items.data" :key="index">
                <div>
                    <div class="vertical-line" v-if="item.id == 4 || item.id == 5 || item.id == 6"></div>
                    <li class="list-inline-item event-list">
                        <div class="px-4">
                            <div class="event-date " :class="item.colorClss">{{ item.date }}</div>
                            <h5 class="f-w-600">{{ item.title }} </h5>
                            <p class="text-muted">{{ item.desc }}</p>
                            <div class="read-more-btn"><a class="btn btn-primary px-3" href="#">Read more</a>
                            </div>
                        </div>
                    </li>
                    <div class="vertical-line" v-if="item.id == 1 || item.id == 2 || item.id == 3"></div>
                </div>
            </div>

        </ul>
    </Card3>
</template>
<script lang="ts" setup>
import { horizontialtimeline } from "@/core/data/advance"
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>