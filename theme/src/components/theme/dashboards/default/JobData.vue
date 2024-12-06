<template>
    <Card1 colClass="col-xxl-5 col-xl-6 proorder-xxl-7 col-lg-12 box-col-12" headerTop="true" cardClass="card job-card"
        cardhaderClass="pb-0 card-no-border" header="true" title="Job Today" cardbodyClass="pt-2" text="true"
        desc="Wednesday 6," spantitle="Dec 2024" condition="true" haderTitle="true">
        <ul class="d-flex align-center justify-content-center gap-3">
            <li v-for="(item, index) in jobdata" :key="index">
                <div class="d-flex gap-2">
                    <div class="flex-shrink-0 " :class="item.class">
                        <svg class="stroke-icon">
                            <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.icon}`"></use>
                        </svg>
                    </div>
                    <div class="flex-grow-1">
                        <h3>{{ item.numbar }}</h3>
                        <p>{{ item.title }} </p>
                    </div>
                </div>
            </li>

        </ul>
        <div class="table-responsive theme-scrollbar">
            <table class="table display" style="width:100%">
                <thead>
                    <tr>
                        <th>Time </th>
                        <th>Job </th>
                        <th>Company</th>
                        <th class="text-center">Employee </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in jobtable" :key="index">
                        <td>{{ item.time }}</td>
                        <td>{{ item.job }}</td>
                        <td>{{ item.company }}</td>
                        <td>
                            <div class="d-flex align-items-center gap-2">
                                <div class="flex-shrink-0"><img :src="getImages(item.img)" alt="" />
                                </div>
                                <div class="flex-grow-1">
                                    <h6>{{ item.name }}</h6>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { jobdata, jobtable } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>