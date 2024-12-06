<template>
    <div :class="filtered ? 'container-fluid product-wrapper sidebaron' : 'container-fluid product-wrapper'">
        <div class="product-grid">
            <div class="feature-products">
                <div class="row">
                    <div class="col-md-6 products-total">
                        <div class="square-product-setting d-inline-block"><a class="icon-grid grid-layout-view"
                                @click="gridView()" data-original-title="" title=""><vue-feather type="grid"></vue-feather>
                            </a></div>
                        <div class="square-product-setting d-inline-block"><a class="icon-grid m-0 list-layout-view"
                                @click="listView()" data-original-title="" title=""><vue-feather
                                    type="list"></vue-feather></a></div>
                        <span class="d-none-productlist filter-toggle" @click="collapseFilter()">
                            Filters<span class="ms-2"><vue-feather class="toggle-data"
                                    type="chevron-down"></vue-feather></span></span>
                        <div class="grid-options d-inline-block">
                            <ul>
                                <li @click="grid2()"><a class="product-2-layout-view" data-original-title="" title=""><span
                                            class="line-grid line-grid-1 bg-primary"></span><span
                                            class="line-grid line-grid-2 bg-primary"></span></a></li>
                                <li @click="grid3()"><a class="product-3-layout-view" data-original-title="" title=""><span
                                            class="line-grid line-grid-3 bg-primary"></span><span
                                            class="line-grid line-grid-4 bg-primary"></span><span
                                            class="line-grid line-grid-5 bg-primary"></span></a></li>
                                <li @click="grid4()"><a class="product-4-layout-view" data-original-title="" title=""><span
                                            class="line-grid line-grid-6 bg-primary"></span><span
                                            class="line-grid line-grid-7 bg-primary"></span><span
                                            class="line-grid line-grid-8 bg-primary"></span><span
                                            class="line-grid line-grid-9 bg-primary"></span></a></li>
                                <li @click="grid6()"><a class="product-6-layout-view" data-original-title="" title=""><span
                                            class="line-grid line-grid-10 bg-primary"></span><span
                                            class="line-grid line-grid-11 bg-primary"></span><span
                                            class="line-grid line-grid-12 bg-primary"></span><span
                                            class="line-grid line-grid-13 bg-primary"></span><span
                                            class="line-grid line-grid-14 bg-primary"></span><span
                                            class="line-grid line-grid-15 bg-primary"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <ProductLength />
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="product-sidebar" :class="filtered ? 'open' : ''">
                            <div class="filter-section">
                                <div class="card">
                                    <div class="card-header">
                                        <h6 class="mb-0 f-w-600">Filters<span class="pull-right"
                                                @click="collapseFilter()"><i
                                                    class="fa fa-chevron-down toggle-data"></i></span></h6>
                                    </div>
                                    <ProductFilterBar @allFilters="allFilter" @priceVal="priceFilterArray" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-12">
                        <form>
                            <div class="form-group m-0">
                                <input class="form-control" type="search" placeholder="Search.." data-original-title=""
                                    title=""><i class="fa fa-search"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ProdectDetail />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { useProductsStore } from "@/store/products"
const ProductLength = defineAsyncComponent(() => import("@/components/theme/ecommerce/product/ProductLength.vue"))
const ProdectDetail = defineAsyncComponent(() => import("@/components/theme/ecommerce/product/ProdectDetail.vue"))
const ProductFilterBar = defineAsyncComponent(() => import("@/components/theme/ecommerce/product/ProductFilterBar.vue"))
let filtered = ref<boolean>(false)
let allFilters = ref<object[]>([])
let store = useProductsStore()
function collapseFilter() {
    filtered.value = !filtered.value;
}
function grid2() { store.grid2(true); }
function grid3() { store.grid3(); }
function grid4() { store.grid4(); }
function grid6() { store.grid6(); }
function listView() { store.listView(); }
function gridView() { store.grid4(); }
function allFilter(selectedVal: object[]) {
    allFilters.value = selectedVal;
    store.setTags(selectedVal);
}
function priceFilterArray(item: number) {
    store.priceFilter(item);
}
</script>