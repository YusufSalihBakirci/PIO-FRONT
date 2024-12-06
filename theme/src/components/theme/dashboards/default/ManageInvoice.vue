<template>
    <Card1 colClass="col-xxl-6 col-xl-7 proorder-xxl-5 col-md-6 box-col-6" cardClass="card height-equal"
        cardhaderClass="card-no-border" header="true" title="Manage Invoice"
        cardbodyClass="pt-0 manage-invoice filled-checkbox">
        <div class="table-responsive theme-scrollbar">
            <div id="manage-invoice_wrapper" class="dataTables_wrapper no-footer">
                <div id="manage-invoice_filter" class="dataTables_filter"><label>Search:<input type="search" placeholder=""
                            v-model="filterQuery"></label></div>
                <table class="table display table-bordernone mt-0" id="manage-invoice" style="width:100%">
                    <thead>
                        <tr>
                            <th>
                                <div class="form-check checkbox checkbox-solid-primary">
                                    <input class="form-check-input" id="solid" type="checkbox" />
                                    <label class="form-check-label" for="solid"> </label>
                                </div>
                            </th>
                            <th>Client</th>
                            <th>Date</th>
                            <th>Payment</th>
                            <th>Id No</th>
                            <th>Amount</th>
                            <th class="text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody v-if="!invoice.length">
                        <tr class="odd">
                            <td valign="top" colspan="6" class="dataTables_empty">No matching records found</td>
                        </tr>
                    </tbody>
                    <tbody v-if="invoice.length">
                        <tr v-for="(item, index) in invoice" :key="index">
                            <td>
                                <div class="form-check checkbox checkbox-solid-primary">
                                    <input class="form-check-input" :id="item.for" type="checkbox"
                                        :checked="item.checked" />
                                    <label class="form-check-label" :for="item.for"> </label>
                                </div>
                            </td>
                            <td><router-link to="/ecommerce/product_list">
                                    <h6 class="f-w-600">{{ item.name }}</h6>
                                </router-link></td>
                            <td>
                                <p class="f-w-600">{{ item.date }}</p>
                            </td>
                            <td>
                                <h6 class="f-w-600">{{ item.payment }}</h6>
                            </td>
                            <td>
                                <p class="f-w-600">{{ item.id }}</p>
                            </td>
                            <td>
                                <h6 class="f-w-600">{{ item.amount }}</h6>
                            </td>
                            <td class="text-end">
                                <div class="btn " :class="item.class">{{ item.status }} </div>
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
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
let filterQuery = ref<string>("")
let store = useDashboardStore()
let invoice = computed(() => {
    return store.invoices.filter((item) => {
        return (item.name.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.payment.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.date.toLowerCase().includes(filterQuery.value.toLowerCase()) || item.amount.toLowerCase().includes(filterQuery.value.toLowerCase()))
    })
})
</script>