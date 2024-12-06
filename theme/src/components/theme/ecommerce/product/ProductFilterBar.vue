<template>
    <div class="left-filter ">
        <div class="card-body filter-cards-view animate-chk">
            <div class="product-filter">
                <h6 class="f-w-600">Category</h6>
                <div class="checkbox-animated mt-0">
                    <label class="d-block" for="edo-ani5" v-for="(product, index) in getCategory" :key="index">
                        <input @change="appliedFilter(product.category)" :value="product.category" v-model="applyFilter"
                            class="checkbox_animated" :id="product.category" type="checkbox">{{ product.category }}
                    </label>
                </div>
            </div>
            <div class="product-filter">
                <h6 class="f-w-600">Brand</h6>
                <div class="checkbox-animated mt-0">
                    <label class="d-block" v-for="(brand, index) in getBrand" @change="$emit('allFilters', applyFilter)"
                        :key="index">
                        <input class="checkbox_animated" :value="brand" v-model="applyFilter" :id="brand" type="checkbox">
                        {{ brand }}
                    </label>
                </div>
            </div>
            <div class="product-filter slider-product">
                <h6 class="f-w-600">Colors</h6>
                <div class="color-selector">
                    <ul>
                        <li :style="{ 'background-color': color.color }" :class="applyFilter ? '' : 'active'"
                            v-for="(color, index) in getColors" :key="'color' + index">
                            <input @change="appliedFilter(color.color)" class="colorCheckbox" :value="color.color"
                                v-model="applyFilter" :id="color.color" type="checkbox">
                            <div class="colorDiv"></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="product-filter pb-0">
                <h6 class="f-w-500">Price</h6>
                <VueSlider v-model="one.value" :data="one.data1" :marks="true" :tooltip="'always'"
                    :tooltip-placement="'top'">
                </VueSlider>
                <h6 class="f-w-600 mt-5">New Products</h6>
            </div>
            <div class="product-filter pb-0 new-products">
                <ProductSwiper />
            </div>
            <div class="product-filter text-center"><img class="img-fluid banner-product"
                    src="@/assets/images/ecommerce/banner.jpg" alt="" data-original-title="" title=""></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineEmits, onMounted, defineAsyncComponent } from "vue"
import { useProductsStore } from "@/store/products"
import { data } from "@/core/data/products"
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
const ProductSwiper = defineAsyncComponent(() => import("@/components/theme/ecommerce/product/ProductSwiper.vue"))
interface oneData {
    value: number[],
    data1: number[]
}
let applyFilter = ref([])
let range = ref<number[]>([0, 900])
const one = ref<oneData>({
    value: [200, 800],
    data1: [10, 100, 200, 250, 500, 750, 800, 1000],
})
let store = useProductsStore()
store.productData(data)
let getCategory = store.getCategory
let getBrand = store.getBrands
let getColors = store.getColors
let emit = defineEmits(['allFilters', 'priceVal'])
function appliedFilter() {
    emit('allFilters', applyFilter.value);
}
onMounted(() => {
    emit('priceVal', range.value)

})
</script>