<template>
    <Card1 colClass="col-xxl-6 col-xl-7 order-xl-1 order-xxl-0 box-col-12" cardClass="card best-sell"
        cardhaderClass="card-no-border pb-0" header="true" title="Best Seller" cardbodyClass="pt-0 ">
        <div class="table-responsive theme-scrollbar">
            <div id="best-sell_wrapper" class="dataTables_wrapper no-footer">
                <div id="best-sell_filter" class="dataTables_filter"><label>Search:<input type="search" class=""
                            v-model="filterQuery" placeholder="" aria-controls="best-sell"></label></div>
                <table class="table display table-bordernone mt-0" id="best-sell" style="width:100%">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Product</th>
                            <th>Country</th>
                            <th>Total</th>
                            <th class="text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody v-if="!seller.length">
                        <tr class="odd">
                            <td valign="top" colspan="6" class="dataTables_empty">No matching records found</td>
                        </tr>
                    </tbody>
                    <tbody v-if="seller.length">
                        <tr v-for="(item, index) in seller" :key="index">
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
                            <td> {{ item.date }}</td>
                            <td> {{ item.product }}</td>
                            <td><img class="img-fluid" :src="getImages(item.country)" alt="" /></td>
                            <td>{{ item.total }}</td>
                            <td class="text-end">
                                <div class="btn " :class="item.class">{{ item.status }}</div>
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
let seller = computed(() => {
    return store.sellers.filter((item) => {
        return (item.name.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.product.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.date.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.total.toLowerCase().includes(filterQuery.value.toLowerCase()))
    })
})
</script>