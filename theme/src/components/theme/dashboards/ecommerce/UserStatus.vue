<template>
    <Card1 colClass="col-xxl-4 col-xl-5 col-md-7 box-col-5" cardClass="card" cardhaderClass="card-no-border pb-0"
        header="true" title="User Status" headerTop="true" down="true" cardbodyClass="pt-0 user-status" haderTitle="true">
        <div class="table-responsive theme-scrollbar">
            <table class="table display table-bordernone" id="user-status" style="width:100%">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>country</th>
                        <th class="text-center">Popular</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in userstatus" :key="index">
                        <td>
                            <div class="d-flex align-items-center gap-3">
                                <div class="flex-shrink-0 comman-round"><img :src="getImages(item.img)" alt="" /></div>
                                <div class="flex-grow-1"><router-link to="/ecommerce/details/1">
                                        <h6>{{ item.name }}<span>{{ item.status }}</span></h6>
                                    </router-link></div>
                            </div>
                        </td>
                        <td>
                            <h3>{{ item.contery }}</h3>
                        </td>
                        <td>
                            <div class="progress " :class="item.lightclass">
                                <div class="progress-bar " :class="item.class" role="progressbar"
                                    :style="{ 'width': item.popular }" aria-valuenow="25" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { userstatus } from "@/core/data/dashboards"
import { getImages } from "@/composables/common/getImages"
import { defineAsyncComponent } from 'vue'
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>