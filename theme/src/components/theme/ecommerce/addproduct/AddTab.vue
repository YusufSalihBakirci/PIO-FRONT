<template>
    <div class="col-xxl-3 col-xl-4 box-col-4e sidebar-left-wrapper">
        <ul class="sidebar-left-icons nav nav-pills" id="add-product-pills-tab" role="tablist">
            <li class="nav-item" v-for="(item, index) in add" :key="index"> <a class="nav-link "
                    v-bind:class="{ 'active': item.title === activeclass }" id="detail-product-tab" data-bs-toggle="pill"
                    :href="item.id" role="tab" aria-controls="detail-product" aria-selected="false">
                    <div class="nav-rounded">
                        <div class="product-icons">
                            <svg class="stroke-icon">
                                <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.icon}`"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="product-tab-content">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.desc }}</p>
                    </div>
                </a></li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { add } from "@/core/data/ecommerce"
let activeclass = ref<string>('Add Product Details')
function status(value: string) {
    activeclass.value = value;
}
</script>