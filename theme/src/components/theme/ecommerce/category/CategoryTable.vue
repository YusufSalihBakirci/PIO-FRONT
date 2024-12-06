<template>
    <Card3 colClass="col-sm-12">
        <ProductFilter :product="products" title="Add Category" />
        <div class="list-product list-category">
            <form>
                <div class="mb-3 row justify-content-start">
                    <label for="table-complete-search" class="col-xs-3 col-sm-auto col-form-label">Search:</label>
                    <div class="col-xs-3 col-sm-auto">
                        <input id="table-complete-search form-control" type="text" class="datatable-input"
                            v-model="filterQuery">
                    </div>
                </div>
                <table class="table datatable-table" id="project-status">
                    <thead>
                        <tr>
                            <th>
                                <div class="form-check">
                                    <input class="form-check-input checkbox-primary" type="checkbox">
                                </div>
                            </th>
                            <th> <span class="f-light f-w-600">Category</span></th>
                            <th> <span class="f-light f-w-600">Description</span></th>
                            <th> <span class="f-light f-w-600">Category Type</span></th>
                            <th> <span class="f-light f-w-600">Action</span></th>
                        </tr>
                    </thead>
                    <tbody v-if="!get_rows().length">
                        <tr class="odd">
                            <td valign="top" colspan="6" class="dataTables_empty">No results match your search query</td>
                        </tr>
                    </tbody>
                    <tbody v-if="get_rows().length">
                        <tr class="product-removes" v-for="(row, index) in get_rows()" :key="index">
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input checkbox-primary" type="checkbox">
                                </div>
                            </td>
                            <td>
                                <div class="product-names">
                                    <div class="light-product-box"><img class="img-fluid" :src="getImages(row.image)"
                                            alt="t-shirt"></div>
                                    <p>{{ row.name }}</p>
                                </div>
                            </td>
                            <td>
                                <p class="f-light">{{ row.category }}</p>
                            </td>
                            <td> <span class="badge " :class="row.color">{{ row.status }}</span></td>
                            <td>
                                <div class="product-action">
                                    <svg>
                                        <use href="@/assets/svg/icon-sprite.svg#edit-content"></use>
                                    </svg>
                                    <svg>
                                        <use href="@/assets/svg/icon-sprite.svg#trash1"></use>
                                    </svg>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <span>Showing {{ get_rows().length }} to 10 of 19 entries</span>
                <ul class="pagination mt-2 justify-content-end pagination-primary" v-if="get_rows().length">
                    <li class="page-item"> <a class="page-link" v-on:click="prev()" aria-label="Previous"><span
                                aria-hidden="true">&laquo;</span></a></li>
                    <li class="page-item" v-for="i in num_pages()" :key="i"
                        v-bind:class="[i == currentPage ? 'active' : '']" v-on:click="change_page(i)">
                        <a class="page-link">{{ i }}</a>
                    </li>
                    <li class="page-item"><a class="page-link" v-on:click="change()" aria-label="Next"><span
                                aria-hidden="true">&raquo;</span></a></li>
                </ul>
            </form>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, computed, watch, onMounted } from 'vue'
import { useProductsStore } from "@/store/products"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const ProductFilter = defineAsyncComponent(() => import("@/components/common/ProductFilter.vue"))
let elementsPerPage = ref<number>(10)
let currentPage = ref<number>(1)
let filterQuery = ref<string>("")
let allData = ref<any[]>([])
let products = ref<string>("")
let store = useProductsStore()
watch(filterQuery, (search: string) => {
    var filteredData = store.category.filter((row) => {
        return (
            row.name.toLowerCase().includes(search.toLowerCase()) || row.category.toLowerCase().includes(search.toLowerCase()) || row.status.toLowerCase().includes(search.toLowerCase())
        )
    });
    search == "" ? allData.value = store.category : allData.value = filteredData
})
watch(products, (item: string) => {
    return item ? allData.value.filter((products) => !products.product.indexOf(allData.value)) : item

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
onMounted(() => { allData.value = store.category; })
</script>