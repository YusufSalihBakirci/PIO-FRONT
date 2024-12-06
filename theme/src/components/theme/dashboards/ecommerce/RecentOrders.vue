<template>
    <Card1 colClass="col-xxl-6 col-xl-7 box-col-12" cardClass="card " cardhaderClass="card-no-border pb-0" header="true"
        title="Recent Orders" cardbodyClass="pt-0 recent-order">
        <div class="table-responsive theme-scrollbar">
            <div id="recent-order_wrapper" class="dataTables_wrapper no-footer">
                <div id="recent-order_filter" class="dataTables_filter"><label>Search:<input type="search"
                            v-model="filterQuery" class="" placeholder="" aria-controls="recent-order"></label>
                </div>
                <table class="table display table-bordernone" id="recent-order" style="width:100%">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>amount</th>
                            <th>vendor</th>
                            <th>status</th>
                            <th class="text-center">rating</th>
                        </tr>
                    </thead>
                    <tbody v-if="!order.length">
                        <tr class="odd">
                            <td valign="top" colspan="6" class="dataTables_empty">No matching records found</td>
                        </tr>
                    </tbody>
                    <tbody v-if="order.length">
                        <tr v-for="(item, index) in order" :key="index">
                            <td>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="flex-shrink-0 comman-round"><img :src="getImages(item.img)" alt="" />
                                    </div>
                                    <div class="flex-grow-1"><router-link to="/ecommerce/details/1">
                                            <h6>{{ item.name }}</h6>
                                        </router-link>
                                        <p>{{ item.year }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="f-w-600">{{ item.product }}</td>
                            <td class="font-primary f-w-600">{{ item.amount }}</td>
                            <td class="f-w-600">{{ item.vendor }}</td>
                            <td>
                                <div class="status-showcase">
                                    <p>{{ item.status }}</p>
                                    <div class="progress " :class="item.class">
                                        <div class="progress-bar " :class="item.bgclass" role="progressbar"
                                            :style="{ 'width': item.status }" aria-valuenow="25" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-end">
                                <h6>{{ item.rating }}<span>{{ item.vote }}</span></h6>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Card1>
</template>
<script lang="ts" setup>
import { useDashboardStore } from "@/store/dashboard"
import { defineAsyncComponent, ref, computed } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
let filterQuery = ref<string>("")
let store = useDashboardStore()
let order = computed(() => {
    return store.orders.filter((item) => {
        return (item.name.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.product.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.amount.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.rating.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.vendor.toLowerCase().includes(filterQuery.value.toLowerCase()))
    })
})
</script>