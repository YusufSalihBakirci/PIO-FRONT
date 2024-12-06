<template>
    <Card1 colClass="col-xxl-6 col-xl-7 order-xxl-0 order-xl-3 col-md-6 box-col-7 box-order-2" cardClass="card "
        cardhaderClass="card-no-border pb-0" header="true" title="Assignments" cardbodyClass=" pt-0 assignment-table">
        <div class="table-responsive theme-scrollbar">
            <div id="assignment_wrapper" class="dataTables_wrapper no-footer">
                <div id="assignment_filter" class="dataTables_filter"><label>Search:<input type="search"
                            v-model="filterQuery" class="" placeholder="" aria-controls="assignment"></label></div>
                <table class="table display table-bordernone pt-0" id="assignment" style="width:100%">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Subject</th>
                            <th>Start Date</th>
                            <th class="text-center">Status</th>
                            <th class="text-center">submit date</th>
                        </tr>
                    </thead>
                    <tbody v-if="!table.length">
                        <tr class="odd">
                            <td valign="top" colspan="6" class="dataTables_empty">No matching records found</td>
                        </tr>
                    </tbody>
                    <tbody v-if="table.length">
                        <tr v-for="(item, index) in table" :key="index">
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
                                <h6 class="f-w-600">{{ item.subject }}</h6>
                            </td>
                            <td class="f-w-600">{{ item.start }}</td>
                            <td class="text-end">
                                <div class="btn " :class="item.class">{{ item.status }} </div>
                            </td>
                            <td class="f-w-600 text-center">{{ item.submit }}</td>
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
let table = computed(() => {
    return store.table.filter((item) => {
        return (item.name.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.start.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.subject.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.submit.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.status.toLowerCase().includes(filterQuery.value.toLowerCase()))
    })
})
</script>