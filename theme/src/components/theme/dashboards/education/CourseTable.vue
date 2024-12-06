<template>
    <Card1 colClass="col-xxl-3 col-xl-6 order-xxl-0 order-xl-4 col-lg-6 col-md-7 box-col-6" cardClass="card "
        cardhaderClass="card-no-border pb-0" header="true" title="New Courses" headerTop="true" haderTitle="true"
        down="true" cardbodyClass="course-table pt-0">
        <div class="table-responsive">
            <table class="table table-bordernone">
                <tbody>
                    <tr v-for="(item, index) in course " :key="index">
                        <td>
                            <div class="d-flex align-items-center gap-2">
                                <div class="flex-shrink-0 comman-round">
                                    <div class="icon"><img class="img-fluid" :src="getImages(item.img)" alt="chair" /></div>
                                </div>
                                <div class="flex-grow-1"><router-link to="/ecommerce/details/1">
                                        <h5>{{ item.name }}</h5>
                                    </router-link>
                                    <p>{{ item.sub }}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <h5>{{ item.class }}</h5>
                            <p>{{ item.time }}</p>
                        </td>
                        <td>{{ item.days }}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { course } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>