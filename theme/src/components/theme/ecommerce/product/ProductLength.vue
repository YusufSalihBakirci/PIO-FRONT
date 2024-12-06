<template>
    <div class="col-md-6 text-sm-end"><span class="f-w-600 m-r-5">Showing Products 1 - {{
        store.filterProducts.length }} Results</span>
        <div class="select2-drpdwn-product select-options d-inline-block">
            <select class="form-control btn-square" name="select" @change="onChangeSort($event)">
                <option value="opt1">Featured</option>
                <option value="opt2">Lowest Prices</option>
                <option value="opt3">Highest Prices</option>
            </select>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { useProductsStore } from "@/store/products"
let store = useProductsStore()
function onChangeSort(event: any) {
    store.sortProducts(event.target.value)
}

</script>