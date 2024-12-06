<template>
    <div class="list-product-header">
        <div>
            <div class="light-box" @click="showFilter()"><a data-bs-toggle="collapse" href="#collapseProduct" role="button"
                    :aria-expanded="show ? true : false" aria-controls="collapseProduct"><vue-feather class="filter-icon "
                        :class="show ? 'hide' : 'show'" type="filter"></vue-feather><i class="icon-close filter-close "
                        :class="show ? 'show' : 'hide'"></i></a></div><router-link to="/ecommerce/add_product"
                class="btn btn-primary"><i class="fa-solid fa-plus"></i>{{ title }}</router-link>
        </div>
        <div :class="show ? 'show' : 'd-none'" id="collapseProduct">
            <div class="card card-body list-product-body">
                <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
                    <div class="col">
                        <select class="form-select" aria-label="Default select example">
                            <option v-for="(items, index) in product" :key="index">{{ items.title }}</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-select" aria-label="Default select example">
                            <option v-for="(category, index) in categorys" :key="index">{{ category.title }}
                            </option>

                        </select>
                    </div>
                    <div class="col">
                        <select class="form-select" aria-label="Default select example">
                            <option v-for="(sub, index) in subcategory" :key="index">{{ sub.title }}</option>

                        </select>
                    </div>
                    <div class="col">
                        <select class="form-select" aria-label="Default select example">
                            <option v-for="(status, index) in statu" :key="index">{{ status.title }}</option>

                        </select>
                    </div>
                    <div class="col">
                        <select class="form-select" aria-label="Default select example">
                            <option v-for="(prices, index) in price" :key="index">{{ prices.title }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { product, categorys, subcategory, statu, price, } from "@/core/data/ecommerce"
let props = defineProps({
    products: String,
    title: String
})
let show = ref<boolean>(false)
function showFilter() {
    show.value = !show.value
}
</script>