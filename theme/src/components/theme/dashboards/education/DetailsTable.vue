<template>
    <Card1 colClass="col-xxl-6 col-xl-7 order-xxl-0 order-xl-1 col-sm-6 box-col-12" cardClass="card "
        cardhaderClass="card-no-border pb-0" header="true" title="Student Details" cardbodyClass="pt-0 details-table">
        <div class="table-responsive theme-scrollbar">
            <div id="student-detail_wrapper" class="dataTables_wrapper no-footer">
                <div id="student-detail_filter" class="dataTables_filter"><label>Search:<input type="search"
                            v-model="filterQuery" class="" placeholder="" aria-controls="student-detail"></label></div>
                <table class="table display table-bordernone mt-0" id="student-detail" style="width:100%">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Poduct</th>
                            <th>QTY</th>
                            <th>Attendance</th>
                            <th class="text-center">rating</th>
                        </tr>
                    </thead>
                    <tbody v-if="!details.length">
                        <tr class="odd">
                            <td valign="top" colspan="6" class="dataTables_empty">No matching records found</td>
                        </tr>
                    </tbody>
                    <tbody v-if="details.length">
                        <tr v-for="(item, index) in details" :key="index">
                            <td>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="flex-shrink-0 comman-round"><img :src="getImages(item.img)" alt="" /></div>
                                    <div class="flex-grow-1"><router-link to="/ecommerce/details/1">
                                            <h6>{{ item.name }}</h6>
                                        </router-link>
                                        <p>{{ item.year }}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h6 class="f-w-600">{{ item.product }}</h6>
                            </td>
                            <td class="f-w-600">{{ item.qty }}</td>
                            <td class="f-w-600 text-center">{{ item.attendance }}</td>
                            <td class="text-end">
                                <div class="btn " :class="item.class">{{ item.rating }}</div>
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
let details = computed(() => {
    return store.detail.filter((item) => {
        return (item.name.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.product.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.qty.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.rating.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.attendance.toLowerCase().includes(filterQuery.value.toLowerCase()))
    })
})
</script>