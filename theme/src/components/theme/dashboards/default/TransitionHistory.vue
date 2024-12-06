<template>
    <Card1 colClass="col-xxl-6 col-xl-8 proorder-xxl-8 col-lg-12 col-md-6 box-col-7" cardClass="card"
        cardhaderClass="card-no-border pb-0" header="true" title="Transition History"
        cardbodyClass="transaction-history pt-0">
        <div class="table-responsive theme-scrollbar">
            <div id="recent-order_wrapper" class="dataTables_wrapper no-footer">
                <div id="recent-order_filter" class="dataTables_filter"><label>Search:<input type="search" placeholder=""
                            v-model="filterQuery"></label></div>
                <table class="table display table-bordernone" id="transaction" style="width:100%">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Invoice No.</th>
                            <th>Credit/Debit</th>
                            <th>Date/Time</th>
                            <th class="text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody v-if="!history.length">
                        <tr class="odd">
                            <td valign="top" colspan="6" class="dataTables_empty">No matching records found</td>
                        </tr>
                    </tbody>
                    <tbody v-if="history.length">
                        <tr v-for="(item, index) in history" :key="index">
                            <td>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="flex-shrink-0"><img :src="getImages(item.img)" alt="" />
                                    </div>
                                    <div class="flex-grow-1"><router-link to="/ecommerce/details/1">
                                            <h6>{{ item.name }}</h6>
                                        </router-link>
                                        <p>{{ item.sub }}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{{ item.invoice }}</td>
                            <td :class="item.textclass">{{ item.credit }}</td>
                            <td>
                                <div class="d-flex">
                                    <div class="flex-grow-1">
                                        <h6>{{ item.date }}</h6>
                                        <p>{{ item.time }}</p>
                                    </div>
                                </div>
                            </td>
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
import { ref, computed } from 'vue'
import { defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
let filterQuery = ref<string>("")
let store = useDashboardStore()
let history = computed(() => {
    return store.data.filter((item) => {
        return (item.name.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.invoice.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.date.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.time.toLowerCase().includes(filterQuery.value.toLowerCase()))
    })
})
</script>