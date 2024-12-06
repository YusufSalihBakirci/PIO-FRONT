<template>
    <div class="table-responsive theme-scrollbar">
        <form>
            <div class="mb-3 row justify-content-end">
                <label for="table-complete-search" class="col-xs-3 col-sm-auto col-form-label">Search:</label>
                <div class="col-xs-3 col-sm-auto">
                    <input id="table-complete-search" type="text" class="form-control" v-model="filterQuery">
                </div>
            </div>
            <table class="table display dataTable support-table" id="basic-6">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Office</th>
                        <th>Skill</th>
                        <th>Extn.</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody v-if="!get_rows().length">
                    <tr class="odd">
                        <td valign="top" colspan="6" class="dataTables_empty">No matching records found</td>
                    </tr>
                </tbody>
                <tbody v-if="get_rows().length">
                    <tr v-for="(row, index) in get_rows()" :key="index">
                        <td>
                            <div class="d-flex"><img class="rounded-circle img-30 me-3" :src="getImages(row.img)"
                                    alt="Generic placeholder image">
                                <div class="flex-grow-1 align-self-center">
                                    <div>{{ row.name }}</div>
                                </div>
                            </div>
                        </td>
                        <td>{{ row.position }}</td>
                        <td>{{ row.salary }}</td>
                        <td>{{ row.office }}</td>
                        <td>
                            <div class="progress-showcase">
                                <div class="progress sm-progress-bar">
                                    <div class="progress-bar" :class="row.skill" role="progressbar"
                                        :style="{ 'width': row.progress }" aria-valuenow="50" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </td>
                        <td>{{ row.extn }}</td>
                        <td>{{ row.email }}</td>

                    </tr>
                </tbody>
            </table>
            <div class="dataTables_info" id="basic-6_info" role="status" aria-live="polite">Showing {{ get_rows().length }}
                to 1 of 1 entries (filtered from 23 total entries)</div>
            <ul class="pagination m-2 justify-content-end pagination-primary" v-if="get_rows().length">
                <li class="page-item"><a class="page-link" @click="prev()">Previous</a></li>
                <li class="page-item" v-for="i in num_pages()" :key="i" v-bind:class="[i == currentPage ? 'active' : '']"
                    v-on:click="change_page(i)">
                    <a class="page-link">{{ i }}</a>
                </li>
                <li class="page-item"><a class="page-link" @click="change()">Next</a></li>
            </ul>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from "vue"
import { items } from "@/core/data/support"
import { getImages } from "@/composables/common/getImages"

let elementsPerPage = ref<number>(10)
let currentPage = ref<number>(1)
let filterQuery = ref<string>("")
let allData = ref<any[]>([])
onMounted(() => {
    allData.value = items;
})
watch(filterQuery, (search: string) => {

    var filteredData = items.filter((row) => {
        return (
            row.name.toLowerCase().includes(search.toLowerCase()) ||
            row.position.toLowerCase().includes(search.toLowerCase()) ||
            row.office.toLowerCase().includes(search.toLowerCase()) ||
            row.salary.toLowerCase().includes(search.toLowerCase())
        );
    });
    search == "" ? allData.value = items : allData.value = filteredData
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

</script>