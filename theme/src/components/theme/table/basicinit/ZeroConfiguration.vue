<template>
    <Card3 colClass="col-sm-12" text="true" cardhaderClass="pb-0 card-no-border" headerTitle="true"
        title="Zero Configuration"
        desc="DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:<code>$().DataTable();</code>.</span><span>Searching, ordering and paging goodness will be immediately added to the table, as shown in this example.">
        <div class="table-responsive theme-scrollbar">
            <form>
                <div class="my-3 row justify-content-end">
                    <label for="table-complete-search" class="col-xs-3 col-sm-auto col-form-label">Search:</label>
                    <div class="col-xs-3 col-sm-auto">
                        <input id="table-complete-search" type="text" class="form-control" v-model="filterQuery">
                    </div>
                </div>
                <table class="display table dataTable no-footer table-bordered" id="basic-1">
                    <thead>
                        <tr>
                            <th scope="col" sortable="name">Name</th>
                            <th scope="col" sortable="startDate">Date</th>
                            <th scope="col" sortable="invoice">Invoice No.</th>
                            <th scope="col" sortable="position">Job Designation</th>
                            <th scope="col" sortable="credit">Credit/Debit</th>
                            <th scope="col" sortable="office">Company Name</th>
                            <th scope="col" sortable="salary">Priority</th>
                            <th scope="col" sortable="Budget">Budget</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="!get_rows().length">
                        <tr>
                            <td valign="top" colspan="7" class="dataTables_empty">
                                No matching records found</td>
                        </tr>
                    </tbody>
                    <tbody v-if="get_rows().length">
                        <tr v-for="(row, index) in get_rows()" :key="index">
                            <td scope="row">
                                <img class="img-40 me-2" :src="getImages(row.img)" alt="">{{ row.name }}
                            </td>
                            <td>{{ row.startDate }}</td>
                            <td>{{ row.invoice }}</td>
                            <td>{{ row.position }}</td>
                            <td>
                                <span class="f-w-700 " :class="row.iconColor">
                                    <i class="icofont" :class="row.iconClass"></i>
                                    {{ row.credit }}
                                </span>
                            </td>
                            <td> {{ row.office }}</td>
                            <td><span class="badge" :class="row.ActionClass">{{ row.salary }}</span></td>
                            <td>{{ row.Budget }}</td>
                            <td>
                                <span>
                                    <span @click='removeProduct(index)'>
                                        <i class="icofont icofont-close-circled font-danger ps-2"></i>
                                    </span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ul class="pagination my-2 justify-content-end pagination-primary" v-if="get_rows().length">
                    <li class="page-item"> <a class="page-link" @click="prev()" aria-label="Previous"><span
                                aria-hidden="true">&laquo;</span></a></li>
                    <li class="page-item" v-for="i in num_pages()" :key="i"
                        v-bind:class="[i == currentPage ? 'active' : '']" v-on:click="change_page(i)">
                        <a class="page-link">{{ i }}</a>
                    </li>
                    <li class="page-item"><a class="page-link" @click="change()" aria-label="Next"><span
                                aria-hidden="true">&raquo;</span></a></li>
                </ul>
            </form>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted, watch } from 'vue'
import { useCommonStore } from "@/store/common"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let elementsPerPage = ref<number>(6)
let currentPage = ref<number>(1)
let filterQuery = ref<string>("")
let allData = ref<any>([])
let store = useCommonStore()
let datatable = store.table
onMounted(() => {
    allData.value = datatable;
})
watch(filterQuery, (search: string) => {
    var filteredData = datatable.filter((row) => {
        return (
            row.name.toLowerCase().includes(search.toLowerCase()) ||
            row.position.toLowerCase().includes(search.toLowerCase()) ||
            row.office.toLowerCase().includes(search.toLowerCase()) ||
            row.salary.toLowerCase().includes(search.toLowerCase()) ||
            row.Budget.toLowerCase().includes(search.toLowerCase())
        );
    });
    search == "" ? allData.value = datatable : allData.value = filteredData
})
function get_rows() {
    var start = (currentPage.value - 1) * elementsPerPage.value;
    var end = start + elementsPerPage.value;
    return allData.value.slice(start, end);
}
function num_pages() {
    return Math.ceil(allData.value.length / elementsPerPage.value);
}
function change_page(page: number) {
    currentPage.value = page;
}
function change() {
    if (currentPage.value < Math.ceil(allData.value.length / elementsPerPage.value)) {
        currentPage.value++;
    }
}
function prev() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}
function removeProduct(index: any) {
    datatable.splice(index, 1)
}
</script>